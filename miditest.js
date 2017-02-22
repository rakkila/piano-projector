//Midi Processing -----------------------------------------------------------------------------

//Visualization -------------------------------------------------------------------------------
//Soundfont.instrument(new AudioContext(), 'soundfonts/acoustic_grand_piano-ogg.js').then(function (piano);
  

WebMidi.enable(function(err) { 
 
      if (err) 
        console.log("WebMidi could not be enabled");

      else
        console.log("WebMidi is enabled!");

     var input = WebMidi.inputs[0];

   //  Listening for a 'note on' message (on all channels) 

     input.addListener('noteon', "all", function(e) 
      { 
        Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano') 
        {
        console.log("Note: " + e.note.name + "  Octave: " + e.note.octave);
        console.log("Velocity: " + e.rawVelocity);
        var key = e.note.name + e.note.octave;
      //  piano.play(key);
        }


     
      });

});


 
