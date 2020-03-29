const pieces = [
    {
      name: "King",
      direction: "any",
      spaces: 1,
      attack: null,
      count: 1,
      color: "white",
      code: "&#9812;",
      in: true,
      teamId: 0,
      pos: {
        letter: "E",
        number: 8
      },
      id: 0
    },
    {
      name: "Queen",
      direction: "any",
      spaces: 8,
      attack: null,
      color: "white",
      code: "&#x2655;",
      count: 1,
      in: true,
      teamId: 0,
      pos: {
        letter: "D",
        number: 8
      },
      id: 1
    },
    {
      name: "Bishop",
      direction: "diagonal",
      spaces: 8,
      attack: null,
      color: "white",
      count: 2,
      code: "&#x2657;",
      in: true,
      teamId: 0,
      pos: {
        letter: "C",
        number: 8
      },
      id: 2
    },
    {
      name: "Bishop",
      direction: "diagonal",
      spaces: 8,
      attack: null,
      color: "white",
      count: 2,
      code: "&#x2657;",
      in: true,
      teamId: 0,
      pos: {
        letter: "F",
        number: 8
      },
      id: 3
    },
    {
      name: "Knight",
      direction: "two-one",
      spaces: 3,
      attack: null,
      code: "&#9816;",
      color: "white",
      count: 2,
      in: true,
      teamId: 0,
      pos: {
        letter: "B",
        number: 8
      },
      id: 4
    },
    {
      name: "Knight",
      direction: "two-one",
      spaces: 3,
      attack: null,
      code: "&#9816;",
      color: "white",
      count: 2,
      in: true,
      teamId: 0,
      pos: {
        letter: "G",
        number: 8
      },
      id: 5
    },
    {
      name: "Rook",
      direction: "lateral",
      spaces: 8,
      attack: null,
      color: "white",
      code: "&#x2656;",
      count: 2,
      in: true,
      teamId: 0,
      pos: {
        letter: "A",
        number: 8
      },
      id: 6
    },
    {
      name: "Rook",
      direction: "lateral",
      spaces: 8,
      attack: null,
      color: "white",
      code: "&#x2656;",
      count: 2,
      in: true,
      teamId: 0,
      pos: {
        letter: "H",
        number: 8
      },
      id: 7
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "A",
        number: 7
      },
      id: 8
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "B",
        number: 7
      },
      id: 9
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "C",
        number: 7
      },
      id: 10
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "D",
        number: 7
      },
      id: 11
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "E",
        number: 7
      },
      id: 12
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "F",
        number: 7
      },
      id: 13
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "G",
        number: 7
      },
      id: 14
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "white",
      code: "&#9817;",
      count: 8,
      in: true,
      teamId: 0,
      pos: {
        letter: "H",
        number: 7
      },
      id: 15
    },
    {
      name: "King",
      direction: "any",
      spaces: 1,
      attack: null,
      count: 1,
      code: "&#9818;",
      color: "black",
      in: true,
      teamId: 1,
      pos: {
        letter: "E",
        number: 1
      },
      id: 16
    },
    {
      name: "Queen",
      direction: "any",
      spaces: 8,
      attack: null,
      color: "black",
      code: "&#9819",
      count: 1,
      in: true,
      teamId: 1,
      pos: {
        letter: "D",
        number: 1
      },
      id: 17
    },
    {
      name: "Bishop",
      direction: "diagonal",
      spaces: 8,
      attack: null,
      color: "black",
      code: "&#9821;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "C",
        number: 1
      },
      id: 18
    },
    {
      name: "Bishop",
      direction: "diagonal",
      spaces: 8,
      attack: null,
      color: "black",
      code: "&#9821;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "F",
        number: 1
      },
      id: 19
    },
    {
      name: "Knight",
      direction: "two-one",
      spaces: 3,
      attack: null,
      color: "black",
      code: "&#9822;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "B",
        number: 1
      },
      id: 20
    },
    {
      name: "Knight",
      direction: "two-one",
      spaces: 3,
      attack: null,
      color: "black",
      code: "&#9822;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "G",
        number: 1
      },
      id: 21
    },
    {
      name: "Rook",
      direction: "lateral",
      spaces: 8,
      attack: null,
      color: "black",
      code: "&#9820;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "A",
        number: 1
      },
      id: 22
    },
    {
      name: "Rook",
      direction: "lateral",
      spaces: 8,
      attack: null,
      color: "black",
      code: "&#9820;",
      count: 2,
      in: true,
      teamId: 1,
      pos: {
        letter: "H",
        number: 1
      },
      id: 23
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "A",
        number: 2
      },
      id: 24
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "B",
        number: 2
      },
      id: 25
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "C",
        number: 2
      },
      id: 26
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "D",
        number: 2
      },
      id: 27
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "E",
        number: 2
      },
      id: 28
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "F",
        number: 2
      },
      id: 29
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "G",
        number: 2
      },
      id: 30
    },
    {
      name: "Pawn",
      direction: "forward",
      spaces: 1,
      attack: "diagonal",
      color: "black",
      code: "\t&#9823;",
      count: 8,
      in: true,
      teamId: 1,
      pos: {
        letter: "H",
        number: 2
      },
      id: 31
    }
  ];
  
  export default pieces;
  