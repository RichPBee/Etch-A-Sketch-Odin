const gridContainer = document.querySelector(".grid-container");
let currentColor = document.querySelector(".color-picker").value;
let mouseDown = false;

window.addEventListener("mousedown", () => {
    mouseDown = true;
})
window.addEventListener("mouseup", () => {
    mouseDown = false;
})

window.addEventListener('resize', () => { 
    handleResize();
})

const handleResize = () => { 
    const squares = document.querySelectorAll('.grid-square');
    const gridContainer = document.querySelector('.grid-container');
    const eleSize = Math.sqrt(squares.length);
    const gridWidth = gridContainer.offsetWidth - 60;
    const squareWidth = (gridWidth)/eleSize;
    squares.forEach((square) => {
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
    })
}


const gridCreator = (value) => {
    let gridWidth = Math.sqrt(value);
    let squareWidth = 600/gridWidth;
    let rgbBtn = document.querySelector("#rgb-randomiser");
    for (let i = 0; i < value; i ++) {
        const gridSquare = document.createElement("div");
        gridSquare.setAttribute("class", "grid-square");
        gridSquare.style.height = `${squareWidth}px`;
        gridSquare.style.width = `${squareWidth}px`;
        gridSquare.id = `${i}`;
        gridContainer.append(gridSquare);
        gridSquare.addEventListener("mouseover", () => {
            if (mouseDown == true) {
                if (rgbBtn.clicked == true) {
                    currentColor = generateRandomHex();
                    gridSquare.style.backgroundColor = currentColor;
                } else {
                    gridSquare.style.backgroundColor = currentColor;
                }
            }
        });
        
    handleResize();

        gridSquare.addEventListener("mousedown", () => {
            mouseDown = true;
            if (rgbBtn.clicked == true) {
                currentColor = generateRandomHex();
                gridSquare.style.backgroundColor = currentColor;
            } else {
                gridSquare.style.backgroundColor = currentColor;
            }
        })

        gridSquare.addEventListener("touchstart", () => { 
            mouseDown = true;
            if (rgbBtn.clicked == true) {
                currentColor = generateRandomHex();
                gridSquare.style.backgroundColor = currentColor;
            } else {
                gridSquare.style.backgroundColor = currentColor;
            }
        })
    }
}

const generateRandomHex = () => {
    const hexVals = "0123456789ABCDEF";
    let randomHex = "#";
    for (let i = 0; i < 6; i++) {
        randomHex += hexVals.charAt(Math.floor(Math.random() * hexVals.length));
    }
    return randomHex;
}


function genHexString(len) {
    const hex = '0123456789ABCDEF';
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += hex.charAt(Math.floor(Math.random() * hex.length));
    }
    return output;
}
const clearGrid = () => {
    const gridSquare = document.querySelectorAll(".grid-square");
    gridSquare.forEach(square => {
        gridContainer.removeChild(square);
    })
}

const sliderValue = document.querySelector(".slider").value;

const gridSize = (sliderValue) => {
    let totalSquares;
    if (sliderValue == 1) {
        return totalSquares = 1;
    } else if (sliderValue == 2) {
        return totalSquares = 4;
    } else if (sliderValue == 3) {
        return totalSquares = 16;
    } else if (sliderValue == 4) {
        return totalSquares = 64;
    } else if (sliderValue == 5) {
        return totalSquares = 256;
    } else if (sliderValue == 6) {
        return totalSquares = 1024;
    } else if (sliderValue == 7) {
        return totalSquares = 4096;
    } else if (sliderValue == 8) {
        return totalSquares = 10000;
    }
}

document.querySelector(".slider").addEventListener("change", () => {
    const sliderValue = document.querySelector(".slider").value;
    const sliderDisplay = document.querySelector(".slider-value");
    clearGrid();
    let gridSquares = gridSize(sliderValue);
    sliderDisplay.textContent = `${Math.sqrt(gridSquares)} x ${Math.sqrt(gridSquares)}`;
    gridCreator(gridSquares);
})

document.querySelector(".color-picker").addEventListener("change", () => {
    currentColor = document.querySelector(".color-picker").value;
    resetButtons();
    let monoBtn = document.querySelector("#monochrome");
    currentColor = document.querySelector(".color-picker").value;
    monoBtn.style.backgroundColor = "#8e8e8e";
})

document.querySelector("#monochrome").addEventListener("click", () => {
    resetButtons();
    let monoBtn = document.querySelector("#monochrome");
    currentColor = document.querySelector(".color-picker").value;
    monoBtn.style.backgroundColor = "#8e8e8e";
})

document.querySelector("#rgb-randomiser").addEventListener("click", () => {
    resetButtons();
    let rgbBtn = document.querySelector("#rgb-randomiser");
    rgbBtn.clicked = true;
    currentColor = "#000000";
    rgbBtn.style.backgroundImage = "linear-gradient(to right, sienna, teal)"
})

document.querySelector("#eraser").addEventListener("click", () => {
    resetButtons();
    document.querySelector("#eraser").clicked = true;
    let eraser = document.querySelector("#eraser");
    currentColor = "white";
    eraser.style.backgroundColor = "white";
})

document.querySelector("#clear").addEventListener("click", () => {
    const clearBtn = document.querySelector("#clear");
    clearBtn.style.backgroundColor = "white";
    setTimeout(() => {
        clearBtn.style.backgroundColor = "transparent";
    }, "250");
    const gridSquares = document.querySelectorAll(".grid-square");
    gridSquares.forEach(square => {
        square.style.backgroundColor = "white";
    })
    
})

const resetButtons = () => {
    const buttonList = document.querySelectorAll("button");
    buttonList.forEach(button => {
        button.clicked = false;
        button.style.backgroundColor = "transparent";
        button.style.backgroundImage = "none";
    })
}


window.addEventListener("load", () => {
    gridCreator(1);
    const sliderDisplay = document.querySelector(".slider-value");
    sliderDisplay.textContent = `${1} x ${1}`;
    document.querySelector("#monochrome").clicked = true;
    let monoBtn = document.querySelector("#monochrome");
    currentColor = document.querySelector(".color-picker").value;
    monoBtn.style.backgroundColor = "#8e8e8e";
})


