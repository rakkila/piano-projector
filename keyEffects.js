function lightUp(key, startTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {   

        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime )
        {
            noteBlockArray[i].mesh.material.color.setHex(0x00ff00);
            break;
        }
    }  
     //sound?
}

function lightOff(key, stopTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {
        if(noteBlockArray[i].note == key && noteBlockArray[i].stopTime == stopTime)
        {
            noteBlockArray[i].mesh.material.color.setHex(0x0000ff);
            break;
        }

    }
      
}

function lightWrong(key, startTime)
{
    for(let i = 0; i < noteBlockArray.length; ++i)
    {   
        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime )
        {
            noteBlockArray[i].mesh.material.color.setHex(0xffffff);
            break;
        }
    }  
}

function fullScore()
{
    fullScoreCounter = 0;
    noteBlockArray.mesh.material.color.setHex(0xffffff);
}