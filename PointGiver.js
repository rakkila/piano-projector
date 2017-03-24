
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

            //pArray[i].points = pArray[i].points + 50;

        }
        else
            continue;
    }
}

//Function looking for a match with 'noteOff'
//Deducts points if the first condition is violated. 
function noteoff(keyOff, timeOff, pArray)
{
    let points = 0;

    for(let i = 0; i < pArray.length; i += 1)
    {
        if (keyOff == pArray[i].note)
        {
            
            if((pArray[i].stoptime < timeOff + 20 || pArray[i].stoptime > timeOff - 20) && timeOff < pArray[i].stoptime && pArray[i].points > 0)

            console.log('wassup');

            pArray[i].points = pArray[i].points;

        }
            else if(pArray[i].stoptime < timeOff + 21)

                pArray[i].points = pArray[i].points - 25; 

            else 
                pArray[i].points = pArray[i].points - (timeOff - pArray[i].stoptime)/2;
        

    }
}