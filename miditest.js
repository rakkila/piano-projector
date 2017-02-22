/**
 * Fetching MIDI-data from MIDI Input
 * Using soundfont-player.js for loading soundfont and play sound
 * Using WebMidi for eventListerners
 */

Soundfont.instrument(new AudioContext(), './soundfonts/acoustic_grand_piano-ogg.js').then(function (piano){

  WebMidi.enable(function(err) { 
 
      if (err) 
        console.log("WebMidi could not be enabled");
      else
        console.log("WebMidi is enabled!");

     var input = WebMidi.inputs[0];

   //  Listening for a 'note on' message (on all channels) 
     input.addListener('noteon', "all", function(e) 
      { 
          let note = e.note.name,
              octave = e.note.octave,
              velocity = e.rawVelocity / 120;

          console.log("Note: " + note + " | Octave: " + octave + " | Velocity: " + velocity);
          let key = e.note.name + e.note.octave;
          piano.play(key, 0, { duration: 5}, {gain: 1});
  
      });

      input.addListener('noteoff', 'all', function(e){
          piano.stop();   
      });

  });

});




 
