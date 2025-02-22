let secondsUpdated=0;
let minutesUpdated=0;
let interval;
const time=document.getElementById("time");

function updateSeconds(){
    secondsUpdated++;
    if(secondsUpdated>=60){
        secondsUpdated=0
        minutesUpdated++;
        secondsUpdated++
    }
}

function updateInterface(){
    time.innerHTML=`${minutesUpdated}:${secondsUpdated}`;
    updateSeconds();
}

function startTime(){
   interval=setInterval(updateInterface,1000);
   
}


function stopTime(){
    clearInterval(interval)
}


function resetTime(){
    let secondsUpdated=0;
    let minutesUpdated=0;
    time.innerHTML=`${minutesUpdated}:${secondsUpdated}`;
}