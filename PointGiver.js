/**
 * Function looking for a match with 'noteOn'
 * Hands out points if conditions are met
*/
function noteon(keyOn, timeOn, pArray)
{
    var points = 0;

    //Goes through the array with notes
    for(let i = 0; i < pArray.length; i++)
    {
        //If keyOn is equal to the current note
        if (keyOn == pArray[i].note)
        {
            console.log(Math.abs(pArray[i].starttime - timeOn));

            //If the time difference between the notes start time and the time the block is pressed is smaller than 250
            if( Math.abs(pArray[i].starttime - timeOn) < 250)
            {
                //Calling the lightUp function
                lightUp(keyOn, pArray[i].starttime);
                //Add 50 points 
                pArray[i].points = pArray[i].points + 50;
                break;
            }
            else
            {   
                //Set the line color to red
                line.material.color.setHex(0xff0000);
                break;
            }  
        }
    }
}


//Function looking for a match with 'noteOff'
//Deducts points if the first condition is violated. 
function noteoff(keyOff, timeOff, pArray, aPoint) {

    
    for (let i = 0; i < pArray.length; i += 1) {

        //If keyOff is equal to the current note
        if (keyOff == pArray[i].note) {

            //Turn off the light on the released block
            lightOff(pArray[i].note, pArray[i].stoptime);
            //Set the line color to black
            line.material.color.setHex(0x050505);

            //If the time difference between the notes stop time and the time the block is released is larger than 200
            //and the points are not 0
            if((Math.abs(pArray[i].stoptime - timeOff) > 200) && pArray[i].points != 0)
            {   
                //Decrease the points with the time difference times 0.05
                pArray[i].points -= Math.round(Math.abs(pArray[i].stoptime - timeOff) * 0.05);
                //Set aPoint equal to the points in place i 
                aPoint = pArray[i].points;
                //Removing one element in the array from place i
                pArray.splice(i, 1);
                update3Dscore();
                break;
            }
            //If the time difference between the notes stop time and the time the block is released is smaller than 200
            //and the points are not 0
            else if((Math.abs(pArray[i].stoptime - timeOff) < 200) && pArray[i].points != 0)
            {
                //Set aPoint equal to the points in place i
                aPoint = pArray[i].points;
                //Removing one element in the array from place i
                pArray.splice(i, 1);
                update3Dscore();
                break;
            }

        }
        else {
            //Set the line color to black
            line.material.color.setHex(0x050505);
            //Calling the lightOff function
            lightOff(pArray[i].note, pArray[i].stoptime);

            continue;
        }
    }

    
    return aPoint;

}