/**
 * Fetching MIDI-data from MIDI Input
 * Using MIDI.js for loading soundfont and play sound
 * Using WebMidi for event listeners
 */

window.onload = function () {

    playSong('./songs-mp3/roses.mp3');

    //Loading soundfont
	MIDI.loadPlugin({
		soundfontUrl: "./soundfonts/",
        instrument: 'acoustic_grand_piano',
    onfailure: function() {console.log('Failed to load soundfont to MIDI keyboard')},
	onsuccess: function() {

         WebMidi.enable(function(err) { 
            if(err) 
                console.log("WebMidi could not be enabled");
            else
                console.log("WebMidi is enabled!");

                //Fetching MIDI input
                var input = WebMidi.inputs[0];

                //Checking if MIDI input is connected
                if(typeof input != 'undefined'){

                    //Listening for a 'note on' message (on all channels) 
                    input.addListener('noteon', "all", function(e){ 
                
                    let octave = e.note.octave + 2,
                        note = sharpToFlat(e.note.name),   
                        key = note + octave;

                    console.log('Key: ' + key + '  | Velocity: ' + e.rawVelocity);

                    //Play pressed note (0 delay)
                    MIDI.noteOn(0, MIDI.keyToNote[key], e.rawVelocity + 15, 0);

                    });

                    //Listening for a 'note off' message (on all channels) 
                    input.addListener('noteoff', 'all', function(e){
                        let octave = e.note.octave + 2,
                            note = sharpToFlat(e.note.name),
                            key = note + octave;

                        //Stop playing the note corresponding to the 'noteoff' message
                        //0 delay, add delay for "sustain pedal"-effect
                        MIDI.noteOff(0, MIDI.keyToNote[key], 0);
                    });

                }
                else
                    console.log('MIDI input not connected');


      });
	}
	});
};


function sharpToFlat(note){

    switch(note){
        case 'C#': note = 'Db'; break;
        case 'D#': note = 'Eb'; break;
        case 'F#': note = 'Gb'; break;
        case 'G#': note = 'Ab'; break;
        case 'A#': note = 'Bb'; break;
        default: break;
    }

    return note;
}
 
