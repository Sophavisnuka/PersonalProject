const submit = document.getElementById('mySubmit');
const welcome = document.getElementById('welcome');
let username;
function submitButton (submit) {
    username = document.getElementById('inputNum').value;
    welcome.textContent = `Welcome ${username}!`;
}