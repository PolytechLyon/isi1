const body = document.querySelector('body');
function pop(event) {
    const x = event.x, y = event.y;
    const button = document.createElement('button');
    button.innerText = 'X';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.addEventListener('click', event => {
        button.remove();
        event.stopPropagation();
    })
    body.append(button);
}
document.addEventListener('click', pop);
