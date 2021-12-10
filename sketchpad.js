const container = document.querySelector('.container');

const DIM = 50;
const WIDTH = 700 / DIM;
const HEIGHT = 700 / DIM;

for(let i = 0; i < DIM * DIM; i++)
{
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseenter', () => {
        div.classList.toggle('grey-square');
    })

    div.style.width = `${WIDTH}px`;
    div.style.height = `${HEIGHT}px`;

    container.appendChild(div);
}

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', resetPad);

function resetPad(){
    console.log("reset");
}

/* const square = document.querySelector('.square');
console.log(square);

square.classList.add('grey-square'); */
