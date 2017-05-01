function lightUp(key, startTime)
{ 

    for(let i = 0; i < noteBlockArray.length; ++i)
    {   

        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime )
        {
            noteBlockArray[i].mesh.material.color.setHex(0x00ff00);

            //setBloomEffect(10);
         //   noteBlockArray[i].mesh.position.z = 2;
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

            noteBlockArray[i].mesh.position.z = 0;
             line.material.color.setHex(0x050505);
             //setBloomEffect(0);

            break;
        }

    }
      
}

/*
function setBloomEffect(b){
    var bloom = b;
}

function getBloomEffect(){
    console.log("bloom: " + bloom);
    return bloom;
}

function fullScore()
{
   fullScoreCounter = 0;
    noteBlockArray.mesh.material.color.setHex(0xffffff);
}*/