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


//set resize buttons change dimensions of pad squares
const smallBtn = document.querySelector('#small');
smallBtn.onclick = () => {
    newPad(100);
}

const mediumBtn = document.querySelector('#medium');
mediumBtn.onclick = () => newPad(50);

const largeBtn = document.querySelector('#large');
largeBtn.onclick = () => newPad(25);

const hugeBtn = document.querySelector('#huge');
hugeBtn.onclick = () => newPad(10);


//remove old squares, sets new dimensions, add new squares
function newPad(newDim) {
    removeSquares();
    setDimensions(newDim);
    addSquares();
}

function addSquares () {
    for (let i = 0; i < dim * dim; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter', () => {
            div.classList.toggle('grey-square');
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