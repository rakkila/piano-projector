class Song{
    
    constructor(song)
    {
        this.name = song;
        this.song = new Audio('./songs-mp3/' + song + '.mp3');
        this.song.preload = 'auto';

    } 

    playSong(){
        this.song.play();
    }

    setVolume(vol){
        this.song.volume = vol;
    }

    getSongName(){
        return this.name;
    }
}



