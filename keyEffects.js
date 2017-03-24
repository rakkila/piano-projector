function lightUp(index)
{ 
     NoteBlockArray[index].mesh = THREE.MeshPhongMaterial({color: 0xffffff});
     //sound?

}

function lightOff(index)
{ 
     NoteBlockArray[index].mesh = THREE.MeshPhongMaterial({color: 0x000000});

}

function lightWrong(index)
{ 
     NoteBlockArray[index].mesh = THREE.MeshPhongMaterial({color: 0xff0000});
     //sound??
     if(NoteBlockArray[index].stoptime - time < 0.1){
         lightOff(index);
     }

}
