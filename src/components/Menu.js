import React, {useState, useEffect} from 'react';
import ImageCropper from './ImageCropper';
import { MenuOutlined, UserOutlined, SettingOutlined, SlidersOutlined, ImportOutlined } from '@ant-design/icons';
import {Card, Drawer} from 'antd'
import "antd/dist/antd.css";
import '../App.css';

const Menu = (props) =>{

    const [showUpload, setShowUpload] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const submitImage = () =>{
        console.log('yes')
        setShowUpload(false)
        setShowMenu(false)
    }

    const itemStyle={
        padding: '10px 0 10px 0', 
        overflowX: 'hidden'
    }


    return (<Card className='menu'>
    <h1>React Chess &#9818;</h1>
        <MenuOutlined onClick={()=>setShowMenu(!showMenu)}/>
        <Drawer
        title="Game Menu"
        placement="right"
        closable={false}
        onClose={()=>setShowMenu(false)}
        bodyStyle={itemStyle}
        footerStyle={itemStyle}
        visible={showMenu}
        footer={<p className='menu-item'>Log Out <ImportOutlined style={{transform: 'rotateY(180deg)'}}/></p>}
      >
        <p className='menu-item'>Account <UserOutlined /> </p>
        <p className='menu-item' onClick={()=>setShowUpload(!showUpload)}>Customize Board <SlidersOutlined /></p>
        <p className='menu-item' >Game Settings <SettingOutlined /></p>
      </Drawer>
        {showUpload 
            ? <ImageCropper visible={showUpload} onOk={submitImage} onCancel={()=>setShowUpload(!showUpload)}/>
            : null
        }
    </Card>)

};

export default Menu;