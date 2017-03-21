/**
 * Starting a clock (stopwatch)
 */

var time = 0;

function updateClock(){
    if(time < 2000)
        time++;

    //console.log(time);
    startClock();
}

function startClock(){
    setTimeout(updateClock, 100);
}

function getClockTime(){
    return time;
}





