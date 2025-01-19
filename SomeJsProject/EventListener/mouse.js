const myBox = document.getElementById('myBox');
const Box = document.getElementById('Box');
const button = document.getElementById('myButton');
const moveAmount = 10;
let x = 0;
let y = 0;
button.addEventListener("click", event => {
    myBox.style.backgroundImage = "url('ming.jpg')";
    myBox.style.backgroundSize = "cover";
    myBox.textContent = "";
})
button.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "pink";
    myBox.textContent = "Don't click 😢";
})
button.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "antiquewhite";
    myBox.style.backgroundImage = "";
    myBox.textContent = " Click me 😘";
})
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        Box.style.top = `${y}px`;
        Box.style.left = `${x}px`;
    }
});