var time = 0;

function playSong(url){
    var song = new Audio(url);
    song.volume = 0.3;
    song.play();
}

function updateClock() {

    if(time < 2000)
        time++;

    startClock();
}

function startClock() {
    setTimeout(startClock, 100);
}



