/**
 * Class: Noteblocks (visualization)
 */

class NoteBlock{

    constructor(note, width, startTime, stopTime, kColor){

        this.active = new Boolean(false);
        this.note = note;
        this.blockWidth = width;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.noteLength = (stopTime - startTime)*tempo;

                    this.mesh = new THREE.Mesh(new THREE.BoxGeometry(this.blockWidth,this.noteLength,0.001),       
                    new THREE.MeshPhongMaterial({color: kColor}));

    }

    toString () {
        return "Note: " + this.note + '  StartTime: ' + this.startTime + ' NoteLength: ' + this.noteLength;
    }

}

function loadNoteBlocks(){

    var songArray = [];
    songArray = parseSongData(song.getSongName());
    let size = songArray.length;
    var noteBlockArray = new Array(size);
    let keyColor;

   // let left = -10.20,
  //  right = 11.05;
  let right = location.search.substring(1).split("?")[1],
      left = location.search.substring(1).split("?")[2],
      
    pianoLength = right-left;
    let noKeys = location.search.substring(1).split("?")[0],
        NoWhiteKeys = 0;

    if(noKeys == 49)
    {
        noWhiteKeys = 49 - 20;
    }
    else if(noKeys == 61)
    {
        noWhiteKeys = 61 - 25;
    }
    else
        noWhiteKeys = 88 - 36;

    let whiteNoteWidth = pianoLength/noWhiteKeys - 0.1, 
        blackNoteWidth = 0.68181818 * whiteNoteWidth, 
        noteWidth;
    
    for(let i = 0; i < size; ++i){
         
        let note = songArray[i].note;

        if(note.includes("b"))
        {
            noteWidth = 0.19;
            keyColor = 0x00000fff;    
        }

        else
        {
            noteWidth =  pianoLength/36 - 0.1;
            keyColor = 0x0000ffff;
        }
            
        noteBlockArray[i] = new NoteBlock(songArray[i].note, noteWidth, songArray[i].starttime, songArray[i].stoptime, keyColor);
    }

  //  console.log('key:' + noteBlockArray[0].note + ' startTime: ' + noteBlockArray[0].startTime + 'StopTime: ' + noteBlockArray[0].stopTime);
  //  console.log('key:' + noteBlockArray[1].note + ' startTime: ' + noteBlockArray[1].startTime + 'StopTime: ' + noteBlockArray[1].stopTime);

    return noteBlockArray;
    
}