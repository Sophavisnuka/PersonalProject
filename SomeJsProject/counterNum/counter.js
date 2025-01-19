const time = document.getElementById('time');
const start = document.getElementById('Start');
const stop = document.getElementById('Stop');
const reset = document.getElementById('reset');
let count = 0;

function increase(start) {
    count++;
    time.textContent = count;
} 
function decrease(stop) {
    count--;
    if (count < 0) {
        return;
    }
    time.textContent = count;
    

}
function Reset(reset) {
    count = 0;
    time.textContent = count;
}