// Function to resize the song array when a certain amount of time has passed
// This is done so that the PointGiver does not search through unnecessary key-events.

function SongResizer(SongArr) {

        for(let i = 0; i < SongArr.length; i++) {

            if(getCurrentTime()-startTime > SongArr[i].stoptime) {

           //  var attime = getCurrentTime()-startTime + 1000;

         //   console.log('Deleted ' + SongArr[i].note + ' at index: ' + i + ' at time: ' + attime + ' ' + SongArr[i].stoptime);

                SongArr.splice(i, 1);
                
            }

        }

        return SongArr;
}