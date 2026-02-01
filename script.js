const gridHeight = 800;
const gridWidth = 800;

const buttonContainer = document.querySelector("#buttonContainer");
let rowAndCol = 64;
createPixels();

buttonContainer.addEventListener('click', event => {
    const buttonID = event.target.id;
    switch (buttonID) {
        case 'sixteen':
            rowAndCol = 16;
            break;
        case 'thirtyTwo':
            rowAndCol = 32;
            break;
        case 'sixtyFour':
            rowAndCol = 64;
            break;
    }
    console.log(rowAndCol);
    destroyPixels()
    createPixels();
});

function createDiv() {
    div = document.createElement('div');
    div.style.height = `${gridHeight/rowAndCol}px`;
    div.style.width = `${gridWidth/rowAndCol}px`;
    div.style.border = '0px';
    div.classList.add('pixel')
    return div;
}

divContainer = document.querySelector("#divContainer")

// pixelCount = getGridNum();
// pixelCount = pixelCount * pixelCount
// console.log(pixelCount)
function destroyPixels() {
    if (divContainer.childElementCount > 0) {
        while (divContainer.firstChild) {
            divContainer.removeChild(divContainer.firstChild);
        }
    }
}


function createPixels() {
    let pixels = rowAndCol;
    pixels = pixels * pixels;

    for (i = 0; i < pixels; i++) {
        divContainer.append(createDiv())
}
}
