/**
 * Fetching MIDI-data from MIDI Input
 * Using MIDI.js for loading soundfont and play sound
 * Using WebMidi for event listeners
 */

window.onload = function () {

  //Loading soundfont 
	MIDI.loadPlugin({
		soundfontUrl: "./soundfonts/",
		instrument: "acoustic_grand_piano",
    onfailure: function() {console.log('Failed to load soundfont' + instrument)},
		onsuccess: function() {

       WebMidi.enable(function(err) { 
          if (err) 
            console.log("WebMidi could not be enabled");
          else
            console.log("WebMidi is enabled!");

          //Fetching MIDI input
          var input = WebMidi.inputs[0];

          //Listening for a 'note on' message (on all channels) 
          input.addListener('noteon', "all", function(e){ 
          
              let octave = e.note.octave + 2,
                  note = e.note.name;

              //Convert # to b
              switch(note){
                  case 'C#': note = 'Db'; break;
                  case 'D#': note = 'Eb'; break;
                  case 'F#': note = 'Gb'; break;
                  case 'G#': note = 'Ab'; break;
                  case 'A#': note = 'Bb'; break;
                  default: break;
              }

              let key = note + octave;
              console.log('Key: ' + key);

              //Play pressed note (0 delay)
              MIDI.noteOn(0, MIDI.keyToNote[key], e.rawVelocity, 0);

          });

          //Listening for a 'note off' message (on all channels) 
          input.addListener('noteoff', 'all', function(e){
                  let octave = e.note.octave + 2,
                      note = e.note.name;

                  switch(note){
                      case 'C#': note = 'Db'; break;
                      case 'D#': note = 'Eb'; break;
                      case 'F#': note = 'Gb'; break;
                      case 'G#': note = 'Ab'; break;
                      case 'A#': note = 'Bb'; break;
                      default: break;
                  }
                
                  let key = note + octave;

                  //Stop playing the note corresponding to the 'noteoff' message
                  //0 delay, add delay for "sustain pedal"-effect
                  MIDI.noteOff(0, MIDI.keyToNote[key], 0);
          });
      });
		}
	});
};



 
