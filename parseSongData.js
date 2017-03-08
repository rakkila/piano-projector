/**
 * Function to parse the song from an array to an array of object EventReader
 * @param {string} theSong - Song name of the song to be parsed
 */
function parseSongData(theSong) {     

    var songData = getSongArray(theSong);

    let songSize = (songData.length)/3;
    var parsedArray = new Array(songSize);

    let j = 0;   

    for(let i = 0; i < songData.length; ++i){ 

        parsedArray[i] = new EventReader(songData[j], songData[j+1], songData[j+2], 0);
        j = j + 3;

        //console.log(ar[i].note + ' ' + ar[i].starttime + ' ' + ar[i].stoptime);
    }

    return parsedArray;

}