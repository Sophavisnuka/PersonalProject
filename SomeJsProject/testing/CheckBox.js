const Sub = document.getElementById("subBox");
const Visa = document.getElementById("visaBox");
const Pay = document.getElementById("payBox");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function () {
    if (Sub.checked) {
        result.textContent = 'You are Sub';
    } else {
        result.textContent = 'You are not Sub';
    }
}