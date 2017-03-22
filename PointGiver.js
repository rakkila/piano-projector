
//Function looking for a match with 'noteOn'
//Hands out points if conditions are met.
function noteon(keyOn, timeOn, pArray)
{
    let points = 0;

    for(let i = 0; i < pArray.length; i++)
    {
        if (keyOn == pArray[i].note)
        {
            
            if((Math.abs(pArray[i].starttime - timeOn) < 10 ) && timeOn < pArray[i].stoptime && pArray[i].points == 0) 
            {
                console.log('HIT!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ');
                pArray[i].points = pArray[i].points + 50;

                break;
            }           

        }
        else
            continue;
    }
}

//Function looking for a match with 'noteOff'
//Deducts points if the first condition is violated.
// Deletes (splices) key-events that have been processed.

function noteoff(keyOff, timeOff, pArray, aPoint)
{

    for(let i = 0; i < pArray.length; i += 1)
    {
        if (keyOff == pArray[i].note)
        {
            console.log('FOUND KEYOFF!!! stoptime = ' + pArray[i].stoptime);
            
            if((Math.abs(pArray[i].stoptime - timeOff) > 15) && pArray[i].points != 0)
            {    
                pArray[i].points -= Math.abs(pArray[i].stoptime - timeOff) * 0.5; 

                console.log('stoptime - timeOff: ' + Math.abs(pArray[i].stoptime - timeOff));
                console.log('You lost: ' + Math.abs(pArray[i].stoptime - timeOff) * 0.5 + ' points. Index: '+ i + ' Array length: ' + pArray.length);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

            else if((Math.abs(pArray[i].stoptime - timeOff) < 15) && pArray[i].points != 0)
            {

                console.log('Full score !!!?!?!?!?!?!?!??!?!?!?!?!?!?!??!?!?!');
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

        }
        else 
            continue;

    }

    console.log('SCORE = ' + aPoint);
    return aPoint;

}

/*
function noteoff(keyOff, timeOff, pArray)
{

    for(let i = 0; i < pArray.length; i += 1)
    {
        if (keyOff == pArray[i].note)
        {
            
           if((pArray[i].stoptime < timeOff + 20 || pArray[i].stoptime > timeOff - 20) && timeOff < pArray[i].stoptime && pArray[i].points > 0) {


                console.log('wassup');

               // pArray[i].points = pArray[i].points;
           }

        }

           else if(pArray[i].stoptime < timeOff + 21)

                pArray[i].points = pArray[i].points - 25; 

            else
                 pArray[i].points = pArray[i].points - (timeOff - pArray[i].stoptime)/2; 
                 

    }

}

*/