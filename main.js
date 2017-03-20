function main(songName){

    //var songName = 'jason_mraz';
    var keyboard = new Keyboard();
    var song = new Song(songName);

    keyboard.startInputOutput(song);

    song.setVolume(0.4);
    //song.playSong();
    startClock();


}

