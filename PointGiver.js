
//Function looking for a match with 'noteOn'
//Hands out points if conditions are met.
function noteon(keyOn, timeOn, pArray)
{
    var points = 0;

    for(let i = 0; i < pArray.length; i++)
    {
        if (keyOn == pArray[i].note)
        {
             
    
            if( Math.abs(pArray[i].starttime - timeOn) < 200 && timeOn < pArray[i].stoptime)
            {
               console.log(Math.abs(pArray[i].starttime - timeOn));
                lightUp(keyOn, pArray[i].starttime);

                pArray[i].points = pArray[i].points + 50;
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
//Deducts points if the first condition is// violated. 
function noteoff(keyOff, timeOff, pArray, aPoint)
{

    for(let i = 0; i < pArray.length; i += 1)
    {
        if (keyOff == pArray[i].note)
        {

         
            if((Math.abs(pArray[i].stoptime - timeOff) > 200) && pArray[i].points != 0)
            {    
                pArray[i].points -= Math.round(Math.abs(pArray[i].stoptime - timeOff) * 0.05); 

                lightOff(pArray[i].note, pArray[i].stoptime);

                //lightWrong(keyOn, starttime);
               // fullScoreCounter = 0;
                //starPower = false;

                //console.log('stoptime - timeOff: ' + Math.abs(pArray[i].stoptime - timeOff));
              //  console.log('You lost: ' + Math.round(Math.abs(pArray[i].stoptime - timeOff) * 0.05) + ' points.');
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

            else if((Math.abs(pArray[i].stoptime - timeOff) < 200) && pArray[i].points != 0)
            {
                lightOff(pArray[i].note, pArray[i].stoptime);
           //     console.log('Full score !');
               /* if(starPower == false) fullScoreCounter += 1;
                if(fullScoreCounter == 3) 
                {   
                    fullScore();
                    starPower = true;
                }*/
              //  lightOff(keyOff, pArray[i].stoptime);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

        }
        else 
            continue;

    }
    return aPoint;
}