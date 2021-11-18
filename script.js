let container = document.querySelector('.container');
let clearButton = document.querySelector('.button1');
let color;
let colorButtons = document.querySelectorAll('.color-option');
let pixelButtons = document.querySelectorAll('.pixel-option');

createGrid(32);

function createGrid(num) {
  pixelReset();
  for(let i= 0; i < num * num; i++) {
      let board = document.createElement('div');
      board.className = "squares";
      container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
      container.appendChild(board);
  }
    const div = container.querySelectorAll("div");
    div.forEach((pixel) => pixel.addEventListener("mouseover", colorPixel));
    div.forEach((pixel) => (pixel.style.backgroundColor = "white"));

}

function colorPixel () {
  if (color == "red") {
    this.style.backgroundColor = "red";
  } else if (color == "rainbow") {
    this.style.backgroundColor = `rgb(${rainbow()},${rainbow()},${rainbow()})`;
  } else if (color == "white") {
    this.style.backgroundColor = "white";
  } else {
    this.style.backgroundColor = "black";
  }
}


function rainbow() {
  const value = Math.floor(Math.random() * 255);
  return value;
}

function pixelOption(e) {
  if (e.target.dataset.pixel == "32px") {
    createGrid(32);
  } else if (e.target.dataset.pixel == "64px") {
    createGrid(64);
  } else if (e.target.dataset.pixel == "128px") {
    createGrid(128);
  }
}


function colorOption(e) {
  if (e.target.dataset.color == "red") {
    color = "red";
  } else if (e.target.dataset.color == "rainbow") {
    color = "rainbow";
  } else if (e.target.dataset.color == "white") {
    color = "white";
  } else {
    color = "black";
  }
}

function pixelReset() {
  let pixels = container.querySelectorAll("div");
  pixels.forEach((pixel) => pixel.remove());
}


function clearCanvas() {
  const div = container.querySelectorAll("div");
  div.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}
clearButton.addEventListener("click", clearCanvas);



colorButtons.forEach((colorButton) =>
  colorButton.addEventListener("click", colorOption)
);

pixelButtons.forEach((pixelButton) =>
  pixelButton.addEventListener("click", pixelOption)
);

