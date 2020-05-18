const timer = document.getElementById('timer');

let minutes = 0;
 
let secondes = 0;
 
let time;
 
function countTime() {
    time = `${minutes} : ${secondes}`;
    timer.textContent = time;
    secondes++;
 
    if(secondes === 60 && minutes >= 0) {
        minutes++;
        secondes = 0;
    }
}

const interval = setInterval(countTime, 1000);