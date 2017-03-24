
//Function looking for a match with 'noteOn'
//Hands out points if conditions are met.
function noteon(keyOn, timeOn, pArray)
{
    let points = 0;

    for(let i = 0; i < pArray.length; i++)
    {
        if (keyOn == pArray[i].note)
        {
            
            if((pArray[i].starttime < timeOn + 10 || pArray[i].starttime > timeOn - 10) && timeOn < pArray[i].stoptime)
                console.log('YES!');
                lightUp(i);

            //pArray[i].points = pArray[i].points + 50;

        }
        else
            continue;
    }
}

//Function looking for a match with 'noteOff'
//Deducts points if the first condition is violated. 
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
                lightWrong(i);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

            else if((Math.abs(pArray[i].stoptime - timeOff) < 15) && pArray[i].points != 0)
            {

                console.log('Full score !!!?!?!?!?!?!?!??!?!?!?!?!?!?!??!?!?!');
                lightOff(index);
                aPoint = pArray[i].points;
                pArray.splice(i, 1);
                break;
            }

        }
        else 
            continue;

}
}