/**
 * Functon to light up the noteblocks
 */
function lightUp(key, startTime)
{ 
    //Goes through the noteblockarray 
    for(let i = 0; i < noteBlockArray.length; ++i)
    {   
        //If the noteblock index is equal to the key and has the same start time
        if(noteBlockArray[i].note == key && noteBlockArray[i].startTime == startTime)
        {
            //Changing the pressed blocks color
            noteBlockArray[i].mesh.material.color.setHex(0x00ff00);
            addShine(noteBlockArray[i], i);

            //Start rendering the particle system at the pressed key
            const particleIndex = particleSystem_keyPressed.map(x => x.note).indexOf(key);
            //Getting the correct index in the particle array to render
            particleSystem_keyPressed[particleIndex].setLifeTime(8);

            break;
        }
    }  
     
}

/**Function to turn of the light on the noteblocks
*/
function lightOff(key, stopTime)
{ 
    //Goes through the noteblockarray
    for(let i = 0; i < noteBlockArray.length; ++i)
    {
        //If the noteblock index is equal to the key and has the same stop time
        if(noteBlockArray[i].note == key && noteBlockArray[i].stopTime == stopTime)

        {   
            //Calling the removeShine function
            removeShine(i);

            //Set the current note block to red
            if(key.includes("b"))
                noteBlockArray[i].mesh.material.color.setHex(0x000d33);
            else
                noteBlockArray[i].mesh.material.color.setHex(0x002db3);
            //Setting the blocks z-position to 0
            noteBlockArray[i].mesh.position.z = 0;

            //Stop rendering the particle system at the pressed key
            const particleIndex = particleSystem_keyPressed.map(x => x.note).indexOf(key);
            //Getting correct index in particle array to render
            particleSystem_keyPressed[particleIndex].setLifeTime(0.00001);

            //Setting the line color to black
            line.material.color.setHex(0x050505);

            break;
        }

    }
      
}
