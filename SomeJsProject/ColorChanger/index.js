const container = document.getElementsByClassName('container')[0];
const reset = document.getElementById('reset');
const headText = document.getElementById('head-text');
function changeColor(color) {
    if (color === 'reset') {
        container.style.backgroundColor = '';
    } else if (color === 'yellow') {
        container.style.backgroundColor = color;
        headText.style.color = 'black';
    } else {
        container.style.backgroundColor = color;
        headText.style.color = 'white';
    }
}
