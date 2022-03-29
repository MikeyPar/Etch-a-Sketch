const button = document.querySelector('button');
button.addEventListener('click', () => {
    reset();
});

run();

function reset()
{
    const elements = document.getElementsByClassName('square');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    run();
}

function run(){
    const container = document.querySelector('.container');
    let size = prompt("Pixels:");
    let pxsize = (650 / size) + "px";
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.height = pxsize;
            div.style.width = pxsize;
            container.appendChild(div);
        }
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', function( event ) {
            event.target.style.backgroundColor = 'black';
        });
    });
}