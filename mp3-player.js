var time = 0;

function playSong(url){
    var song = new Audio(url);
    song.volume = 0.3;
    //song.play();
}

function startClock() {

    if(time < 2000)
        time++;
        
    updateClock();
}

function updateClock() {
    setTimeout(startClock, 100);
}



