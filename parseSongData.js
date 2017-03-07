

function parseSongData(theSong) {     

        var songData = getSong(theSong);

        let songSize = (songData.length)/3;

        let j = 0;

        var parsedArray = new Array(songSize);

            for(let i = 0; i < songData.length; i += 1)
        { 

            parsedArray[i] = new EventReader(songData[j], songData[j+1], songData[j+2], 0);

            j = j + 3;

           //console.log(ar[i].note + ' ' + ar[i].starttime + ' ' + ar[i].stoptime);
        }
      
        return parsedArray;

}