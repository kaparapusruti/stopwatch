let[seconds,minutes,hours] =[0,0,0];
let displayTime = document.getElementById("displayTime");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds =0;
        minutes++;
        if(minutes ==60){
            minutes=0;
            hours++;
        }
    }
    displayTime.innerHTML = + hours+ " : "+  minutes+" : " + seconds;
}

function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
timer = setInterval(stopwatch,1000);
}
function watchstop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes,hours] =[0,0,0];
    displayTime.innerHTML="00:00:00";
}
