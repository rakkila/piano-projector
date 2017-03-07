class Song{
    
    constructor(url)
    {
        this.song = new Audio(url);
    } 

    playSong(){
        this.song.play();
    }

    setVolume(vol){
        this.song.volume = vol;
    }
}



