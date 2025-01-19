const increaseBtn = document.getElementById('btn1');
const resetBtn = document.getElementById('btn2');
const decreaseBtn = document.getElementById('btn3');
const countNum = document.getElementById('Num');
let count = 0;
increaseBtn.onclick = function () {
    count++;
    countNum.textContent = count;
}
decreaseBtn.onclick = function () {
    count--;
    countNum.textContent = count;
}
resetBtn.onclick = function () {
    count = 0;
    countNum.textContent = count;
}