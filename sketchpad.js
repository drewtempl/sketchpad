const container = document.querySelector('.container');

let dim = 50;
let width = 700 / dim;
let height = width;

addSquares();

function setDimensions(newDim) {
    dim = newDim;
    width = 700 / dim;
    height = width;
}


//add a clear button
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', resetPad);


//changes all squares to white
function resetPad() {
    const greySquare = document.querySelectorAll('.grey-square');

    for (let i = 0; i < greySquare.length; i++) {
        greySquare[i].classList.remove('grey-square');
    }
}


//resize buttons to change dimensions of pad squares
//and current size toggle
const smallBtn = document.querySelector('#small');
smallBtn.onclick = () => {
    if (currentBtn != smallBtn) {
        newPad(100);
        currentBtn.classList.toggle('current');
        smallBtn.classList.toggle('current')
        currentBtn = smallBtn;
    }
}

const mediumBtn = document.querySelector('#medium');
let currentBtn = mediumBtn;
mediumBtn.onclick = () => {
    if (currentBtn != mediumBtn) {
        newPad(50);
        currentBtn.classList.toggle('current');
        mediumBtn.classList.toggle('current')
        currentBtn = mediumBtn;
    }
}

const largeBtn = document.querySelector('#large');
largeBtn.onclick = () => {
    if (currentBtn != largeBtn) {
        newPad(25);
        currentBtn.classList.toggle('current');
        largeBtn.classList.toggle('current')
        currentBtn = largeBtn;
    }
}

const hugeBtn = document.querySelector('#huge');
hugeBtn.onclick = () => {
    if (currentBtn != hugeBtn) {
        newPad(10);
        currentBtn.classList.toggle('current');
        hugeBtn.classList.toggle('current')
        currentBtn = hugeBtn;
    }
}

function setCurrent() {
    currentBtn.classList.remove('current');

}


//remove old squares, sets new dimensions, add new squares
function newPad(newDim) {
    removeSquares();
    setDimensions(newDim);
    addSquares();
}

function addSquares() {
    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter', () => {
            div.classList.add('grey-square');
        })

        div.style.width = `${width}px`;
        div.style.height = `${height}px`;

        container.appendChild(div);
    }
}

//removes square divs from container
function removeSquares() {
    const divTrash = document.querySelectorAll('.square');

    for (let i = 0; i < dim * dim; i++) {
        container.removeChild(divTrash[i]);
    }
}