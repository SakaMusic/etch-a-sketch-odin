function createDiv() {
    div = document.createElement('div');
    div.style.height = '50px';
    div.style.width = '50px';
    div.style.border = '0px';
    div.classList.add('pixel')
    return div;
}

divContainer = document.querySelector("#divContainer")

for (i = 0; i < 256; i++) {
    divContainer.append(createDiv())
}