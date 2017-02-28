function playSong(url)
{
    var song = new Audio(url);
    song.volume = 0.3;
    song.play();

    startClock();
}

function startClock()
{
    var date = new Date();
    seconds = date.getSeconds();
    console.log(seconds);
}