const display = document.getElementById("Display");

function appendToDisplay (input) {
    display.value += input;
}
function clearToDisplay () {
    display.value = "";
}
function calculate () {    
    // display.value = "Hello world";
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "error";
    }
}
