const CELL_WIDTH = 30;
const TENT_WIDTH = 2;

const fillCellIMG = (contex, img, position) => {
    contex.drawImage(img, position[1] * 32 + 2, position[0] * 32 + 2);
}

const drawCloseCell = (contex, position) => {
    contex.fillStyle = "gray";
    contex.fillRect(position[0], position[1], 30, 30);
}

export const loadImage = (address) => {
    let image = new Image();
    image.src = address;
    return image;
}

export const loadCanvas = ({ contex, height, width }, { canvas }) => {
    // Prevent right click menu
    canvas.oncontextmenu = (e) => { e.preventDefault(); };

    canvas.width = width * 32 + 2;
    canvas.height = height * 32 + 2;

    // Fill background
    contex.fillStyle = "#565656";
    contex.fillRect(0, 0, width * 32 + 2, height * 32 + 2);

    // Fill canvas with gray cells
    for (let i = 2; i < width * 32; i += 32) {
        for (let j = 2; j < height * 32; j += 32) {
            drawCloseCell(contex, [i, j]);
        }
    }
}

export const renderViewMap = ({ contex, board, viewMap, height, width }, { images }) => {
    let amountOfOpenedCells = 0;
    for (let i = 0; i < height; ++i) {
        for (let j = 0; j < width; j++) {
            switch (viewMap[i][j]) {
                case 1:
                    drawCloseCell(contex, [j * 32 + 2, i * 32 + 2]);
                    ++viewMap[i][j];
                    break;
                case 3:
                    fillCellIMG(contex, images[board[i][j]], [i, j]);
                    ++viewMap[i][j];
                    ++amountOfOpenedCells;
                    break;
                case 5:
                    fillCellIMG(contex, images[10], [i, j]);
                    ++viewMap[i][j];
                    break;
            }
        }
    }
    return amountOfOpenedCells;
}


export const fullOpen = ({ viewMap, height, width }) => {
    for (let i = 0; i < height; ++i) {
        for (let j = 0; j < width; ++j) {
            viewMap[i][j] = 3;
        }
    }
}
