import React, {Component} from 'react';
import ReactCrop from 'react-image-crop';
import {Button, Row, Col, Modal} from 'antd';
import Board from './Board'
import 'react-image-crop/dist/ReactCrop.css'

class ImageCropper extends Component {
  state = {
    src: null,
    file: '',
    croppedImage: null,
    fileName: '',
    height: 30,
    width: 30,
    showPreview: false,
    type: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 1/1
    },
    croppedImageUrl: null,
  };

  handleFile = e => {
    const fileReader = new FileReader()
    var file = e.target && e.target.files ? e.target.files[0] : e
    this.setState({
      fileName: file.name,
      type: file.type,
      file
    })
    fileReader.onloadend = () => {
      this.setState({src: fileReader.result })
    };
    fileReader.readAsDataURL(file)
  };

  onImageLoaded = image => {
    this.imageRef = image
  };

  onCropChange = (crop) => {
    var stateCrop = Object.values(this.state.crop).join("");
    var newCrop = Object.values(crop).join("")
    if (stateCrop!== newCrop){
      this.setState({ crop });
    }
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        this.state.fileName
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    var height = Math.round(crop.height)
    var width = Math.round(crop.width)

    this.setState({
      height, width
    })

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const reader = new FileReader()
    canvas.toBlob(blob => {
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        this.dataURLtoFile(reader.result, this.state.fileName)
      }
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, this.state.type);
    });
  }

  dataURLtoFile = (dataurl, filename) => {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while(n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    let croppedImage = new File([u8arr], filename, {type:mime});
    this.setState({croppedImage})
  };

  render(){
    const { crop, croppedImageUrl, croppedImage, src } = this.state;
    const {visible, onCancel, onOk} = this.props;

    return (
      <Modal 
        title="Board Background Image"
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        >
        <Row>
            <Col span={18}>
              <input type="file" accept="image/*" onChange={this.handleFile}/>
            </Col>
            {(this.state.crop.height <= 0 || this.state.crop.width <= 0) && croppedImageUrl
                ? <p style={{color: 'red'}}>Please drag to crop picture before submission.</p>
                : null
            }
          {this.state.file
          ? <div style={{minHeight: 200, marginTop: 15}}>
              {src && (
                <ReactCrop
                  src={src}
                  crop={crop}
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
              )}
            </div>
            : null
          }
          {this.state.file
            ? <Button onClick={()=>this.setState({showPreview: !this.state.showPreview})}>Preview Image</Button>
            : null
          }
          <Modal
              visible={this.state.showPreview}
              title={'Board Preview'}
              onCancel={()=>this.setState({showPreview: false})}
              footer={null}
            >
              <div style={{ display: 'block', margin: 'auto',  position: 'relative' }}>
                <Board fromPreview={true}/>
                <div className="imagePreview">
                    <img alt="cropped" src={croppedImageUrl} />
                </div>
              </div>
          </Modal>

        </Row>
      </Modal>
    )
  }
};

export default ImageCropper;