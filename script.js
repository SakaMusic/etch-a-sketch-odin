const gridHeight = 700;
const gridWidth = 700;

const divContainer = document.querySelector("#divContainer");
const buttonContainer = document.querySelector("#buttonContainer");
const colorContainer = document.querySelector('#colorContainer');
const rainbowButton = document.querySelector("#rainbow");
let rowAndCol = 16;
let currentColor = 'black';
let isRainbow = false

let isMouseDown = false;
document.body.addEventListener('mousedown', () => {
    isMouseDown = true;
});
document.body.addEventListener('mouseup', () => {
    isMouseDown = false;
});

createPixels();

buttonContainer.addEventListener('click', event => {
    // if (!event.target.classList.contains('.grid-button')) {
    //     return;
    // }
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

colorContainer.addEventListener('click', event => {
    // if (!event.target.classList.contains('.color-button')) return;

        const colorButtonID = event.target.id;
        switch (colorButtonID) {
            case 'rainbow':
                isRainbow = true;
                return;
            case 'red':
                currentColor = 'red';
                break;
            case 'green':
                currentColor = 'green';
                break;
            case 'blue':
                currentColor = 'blue';
                break;
            case 'yellow':
                currentColor = 'yellow';
                break;
            case 'orange':
                currentColor = 'orange';
                break;
            case 'purple':
                currentColor = 'purple';
                break;
            case 'black':
                currentColor = 'black';
                break;
            case 'white':
                currentColor = 'white'
                break
        }
        isRainbow = false
    
})


function createDiv() {
    let div = document.createElement('div');
    div.style.height = `${gridHeight/rowAndCol}px`;
    div.style.width = `${gridWidth/rowAndCol}px`;
    div.style.border = '0px';
    div.classList.add('pixel')
    div.addEventListener('mousedown', () => colorDiv(div));
    div.addEventListener('mouseover', () => {
        if (isMouseDown) {
            colorDiv(div);
        }
    });
    return div;
}


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

    for (let i = 0; i < pixels; i++) {
        divContainer.append(createDiv())
}
}

function colorDiv(element) {
    if (isRainbow) {
        element.style.backgroundColor = getRainbowColor()
    } else {
        element.style.backgroundColor = currentColor;
    }
}


// generate random num between 1 and 7 (for using wtih rainbow option)
function getRandomInt() {
    return Math.floor(Math.random() * 7) + 1;
}

function getRainbowColor() {
    switch(getRandomInt()) {
        case 1:
            return'red';
        case 2:
            return 'orange';
        case 3:
            return'yellow';
        case 4:
            return 'green';
        case 5:
            return 'blue';
        case 6:
            return 'indigo';
        case 7:
            return 'violet';
    }
}