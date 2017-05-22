/** 
 * Function to resize the song array when a certain amount of time has passed
 * This is done so that the PointGiver function does not search through unnecessary key-events
*/
function SongResizer(SongArr) {

        //Goes through the Song array
        for(let i = 0; i < SongArr.length; i++) {

            //If the time difference between the current time and the start time is larger then the stop time
            if(getCurrentTime()-startTime > SongArr[i].stoptime) {
                //Removing one element in the array from place i
                SongArr.splice(i, 1);  
            }
        }
        return SongArr;
}