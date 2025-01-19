const Input = document.getElementById("inputBox");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let age;
submit.onclick = function () {
    age = Input.value;
    age = Number(age);
    if (age == 0) {
        result.textContent = 'You are a Baby';
    } else if (age < 0) {
        result.textContent = 'Input a proper age';
    } else if (age < 18) {
        result.textContent = 'You are not old enough to get a license';
    } else {
        result.textContent = 'You can get a license';
    }
}