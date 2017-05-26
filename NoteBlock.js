/**
 * Class: Noteblocks representing the translating blocks as notes (visualization)
 */

class NoteBlock{

    constructor(note, width, startTime, stopTime, kColor){

        //All the information a note block contains is set
        this.active = new Boolean(false);
        this.note = note;
        this.blockWidth = width;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.noteLength = (stopTime - startTime)*tempo;

        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(this.blockWidth,this.noteLength,0.2),       
        new THREE.MeshPhongMaterial({color: kColor}));

    }
    //A string containing the current note, start time and note length
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

    let noWhiteKeys = getSetupInfo()[0],
        noBlackKeys = getSetupInfo()[1],
        noKeys = noWhiteKeys + noBlackKeys,
        right = getSetupInfo()[2],
        left = getSetupInfo()[3];

    let pianoLength = right-left,
        whiteNoteWidth = pianoLength/noWhiteKeys - 0.01,
        blackNoteWidth = 0.68181818 * whiteNoteWidth,
        noteCenter = noteWidth/2;
    
    for(let i = 0; i < size; ++i){
         
        let note = songArray[i].note;

        if(note.includes("b"))
        {
            noteWidth = blackNoteWidth;
            keyColor = 0x0000ff;    
        }
        else
        {
            noteWidth =  whiteNoteWidth;
            keyColor = 0x0000fff;
        }
            
        noteBlockArray[i] = new NoteBlock(songArray[i].note, noteWidth, songArray[i].starttime, songArray[i].stoptime, keyColor);
    }

    return noteBlockArray;
    
}