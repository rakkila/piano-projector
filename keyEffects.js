function lightUp(key, startTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {   

        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime )
        {
            //changing pressed key color
            noteBlockArray[i].mesh.material.color.setHex(0x00ff00);
            
            //rendering particle system at the pressed key
            //getting correct index in particle array to render
            const particleIndex = particleSystem_keyPressed.map(x => x.note).indexOf(key);
            particleSystem_keyPressed[particleIndex].setLifeTime(4);

            break;
        }
    }  
     
}

function lightOff(key, stopTime)
{ 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {
        if(noteBlockArray[i].note == key && noteBlockArray[i].stopTime == stopTime)
        {
            //reseting note block color
            noteBlockArray[i].mesh.material.color.setHex(0x0000ff);

            //stopping to render particle system at the pressed key
            //getting correct index in particle array to render
            const particleIndex = particleSystem_keyPressed.map(x => x.note).indexOf(key);
            particleSystem_keyPressed[particleIndex].setLifeTime(0.00001);

            line.material.color.setHex(0x050505);

            break;
        }

    }
      
}
