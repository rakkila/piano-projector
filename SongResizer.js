// Function to resize the song array when a certain amount of time has passed
// This is done so that the PointGiver does not search through unnecessary key-events.

function SongResizer(SongArr) {

        for(let i = 0; i < SongArr.length; i++) {

            if(SongArr[i].stoptime < getClockTime() + 16) {

             var attime = getClockTime() + 10;

            console.log('Deleted ' + SongArr[i].note + ' at index: ' + i + ' at time: ' + attime + ' ' + SongArr[i].stoptime);

                SongArr.splice(i, 1);

                
            }

        }

        return SongArr;
}