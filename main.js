// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
let widthCol = width / 10;
let heightRow = height / 10;

let startingCol = widthCol;
let startingRow = heightRow;

// Iteration 1
function drawGrid() {
  for (let i = 0; i <= height; i += heightRow) {
    context.moveTo(0, i);
    context.lineTo(width, i);
  }

  for (let i = 0; i <= width; i += heightRow) {
    context.moveTo(i, 0);
    context.lineTo(i, height);
  }

  context.strokeStyle = 'tomato';
  context.stroke();
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

class Character {
  constructor() {
    this.col = startingCol;
    this.row = startingRow;
  }
  moveUp() {
    this.row -= heightRow;
  }
  moveRight() {
    this.col += widthCol;
  }
  moveDown() {
    this.row += heightRow;
  }
  moveLeft() {
    this.col -= widthCol;
  }
}

drawGrid();

function drawPlayer() {
  const player = new Character(startingCol, startingRow);

  const playerImage = new Image();
  playerImage.src = 'images/character-down.png';

  playerImage.addEventListener('load', () => {
    context.drawImage(playerImage, startingCol, startingRow);
  });
}

drawPlayer();

/*
function drawPlayer () {
     
    //colPosition = startingCol;
    //rowPosition = startingRow;

    const player = new Character(0, 0);
    
    const playerImage = new Image();
    playerImage.src = 'images/character-down.png'

    context.drawImage(playerImage, 100, 100, 200, 200)
}

function drawCharacter(x, y) {
  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI * 2);
  context.closePath();
  context.fill();
}

drawCharacter(startingCol, startingRow);
drawPlayer();

*/

function clearCanvas() {
  context.clearRect(0, 0, 500, 500);
}

window.addEventListener('keydown', function (event) {
  const key = event.key;
  switch (key) {
    case 'ArrowUp':
      startingRow -= heightRow;
      break;
    case 'ArrowDown':
      startingRow += heightRow;
      break;
    case 'ArrowLeft':
      startingCol -= widthCol;
      break;
    case 'ArrowRight':
      startingCol += widthCol;
      break;
    default:
      console.log('An unknown key was pressed');
  }
  clearCanvas();
  drawPlayer(startingCol, startingRow);
  drawGrid();
});
