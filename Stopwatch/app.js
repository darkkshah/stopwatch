var sec = 0;
var min = 0;
var hour = 0;

var secVal = document.getElementById("Sec")
var minVal = document.getElementById("Min")
var hourVal = document.getElementById("Hour")

var interval;
var startBtn = document.getElementById("startBtn");

function renderVal(){
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hour;
}

function timeStart() {
    startBtn.disabled = true;
    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
        if (min == 60) {
            hour++;
          min = 0;
        }
    }
    renderVal()
}

function timer(){
    interval = setInterval(function () {
        timeStart();
    }, 1000);
    
}

function stopTime(){
    startBtn.disabled = false;
    clearInterval(interval)
}

function clearTime(){
    startBtn.disabled = false;
 sec = 0;
 min = 0;
 hour = 0; 
 stopTime()
 renderVal()
}

