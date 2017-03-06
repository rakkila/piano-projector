

function noteon(keyOn, timeOn)
{
    let points = 0;

    for(let i = 0; i < ar.length; i += 1)
    {
        if (keyOn == ar[i].note)
        {
            
            if((ar[i].starttime < timeOn + 20 || ar[i].starttime > timeOn - 20) && timeOn < ar[i].stoptime)

            points = points + 50;

        }
        else
            continue
    }
}

