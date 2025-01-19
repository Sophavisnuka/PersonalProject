const inputNum = document.getElementById("inputNum");
const ToMeter = document.getElementById("ToMeter");
const toKilometer = document.getElementById("toKilometer");
const Submit = document.getElementById("Submit");
let Temp;
function show () {
    if (ToMeter.checked) {
        Temp = Number(inputNum.value);
        Temp =  Temp * 1000;
        Submit.textContent = Temp;
    } else if (toKilometer.checked) {
        Temp = Number(inputNum.value);
        Temp =  Temp / 1000;
        Submit.textContent = Temp;
    } else {
        Submit.textContent = "Gay";
    }
}