/**
 * Class: Noteblocks (visualization)
 */

class NoteBlock{

    constructor(note, width, startTime, stopTime){

        this.note = note;
        this.blockWidth = width;
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.noteLength = (stopTime - startTime) * 0.5;
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(this.blockWidth,this.noteLength,0.001), 
                    new THREE.MeshPhongMaterial({color: 0x0000ff}))

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
    let noteWidth;

    for(let i = 0; i < size; ++i){
         
        let note = songArray[i].note;

        if(note.includes("b"))
            noteWidth = 0.19;
        else
            noteWidth = 0.30;

        noteBlockArray[i] = new NoteBlock(songArray[i].note, noteWidth, songArray[i].starttime, songArray[i].stoptime);
    }

    return noteBlockArray;
    
}