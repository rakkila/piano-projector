

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

function noteoff(keyOff, timeOff)
{
    let points = 0;

    for(let i = 0; i < ar.length; i += 1)
    {
        if (keyOff == ar[i].note)
        {
            
            if((ar[i].stoptime < timeOff + 20 || ar[i].stoptime > timeOff - 20) && timeOff < ar[i].stoptime && ar[i].points > 0)

            console.log('wassup');

            ar[i].points = ar[i].points;

        }
            else if(ar[i].stoptime < timeOff + 21)

                ar[i].points = ar[i].points - 25; 

            else 
                ar[i].points = ar[i].points - (timeOff - ar[i].stoptime)/2;
        

    }
}