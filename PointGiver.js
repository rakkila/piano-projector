
//Function looking for a match with 'noteOn'
//Hands out points if conditions are met.

function noteon(keyOn, timeOn, pArray)
{
    var points = 0;

    for(let i = 0; i < pArray.length; i++)
    {
        if (keyOn == pArray[i].note)
        {
            console.log(Math.abs(pArray[i].starttime - timeOn));

            if( Math.abs(pArray[i].starttime - timeOn) < 250)
            {
                
                lightUp(keyOn, pArray[i].starttime);
                pArray[i].points = pArray[i].points + 50;
                break;
            }
            else
            {
                 line.material.color.setHex(0xff0000);
                 break;
            }
            
       }
       /* 
        else
           { 
               /*lightWrong(keyOn, pArray[i].starttime);
               //fullScoreCounter = 0;
               //starPower = false;
        }
        */
    }
}


//Function looking for a match with 'noteOff'
//Deducts points if the first condition is violated. 
function noteoff(keyOff, timeOff, pArray, aPoint) {

    for (let i = 0; i < pArray.length; i += 1) {

        if (keyOff == pArray[i].note) {

            lightOff(pArray[i].note, pArray[i].stoptime);
            line.material.color.setHex(0x050505);

            if((Math.abs(pArray[i].stoptime - timeOff) > 200) && pArray[i].points != 0)
            {    
                pArray[i].points -= Math.round(Math.abs(pArray[i].stoptime - timeOff) * 0.05); 
                //lightOff(pArray[i].note, pArray[i].stoptime);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

            else if((Math.abs(pArray[i].stoptime - timeOff) < 200) && pArray[i].points != 0)
            {
                //lightOff(pArray[i].note, pArray[i].stoptime);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

        }
        else {
            line.material.color.setHex(0x050505);
            lightOff(pArray[i].note, pArray[i].stoptime);

            continue;
        }
    }

    return aPoint;

}