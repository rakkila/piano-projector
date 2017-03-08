window.onload = function(){

    var keyboard = new Keyboard();
    var song = new Song('./songs-mp3/jason_mraz.mp3');

    keyboard.startInputOutput();

    song.setVolume(0.4);
    song.playSong();
    startClock();


}

