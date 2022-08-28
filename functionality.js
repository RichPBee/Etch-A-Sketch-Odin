const gridCreator = (value) => {
    const gridSquare = document.createElement("div");
    gridSquare.setAttribute("class", "grid-square")
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < value; i ++) {
        gridContainer.append(gridSquare);
    }
}

gridCreator(16);