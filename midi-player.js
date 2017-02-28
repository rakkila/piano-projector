
function startMidiPlayer(){

    var player = MIDI.Player;

  //  player.timeWarp = 1.5; // speed the song is played back

    player.loadFile('MIDI-files/purplechanged2.mid', function(){
        console.log('Loaded MIDI file contains following instruments: ');
        console.log(player.getFileInstruments());

        //Loading required soundfonts for playing the MIDi file
        MIDI.loadPlugin({
            soundfontUrl: './soundfonts/',
            instruments: player.getFileInstruments(),
            onsuccess: function(){

<<<<<<< HEAD
                //player.timeWarp = 1.5; // speed the song is played back
                
                player.start();
                MIDI.Player.addListener(function(data) { 
                    var channel = data.channel;
                  
                    if(channel == 2){
                        console.log('Note: ' + data.note + '  | Time: ' + data.now + '  | channel: ' + data.channel);
                        
                   }
                        
=======
                //Set output volume and start player
                MIDI.setVolume(0,50);
                player.start();

                //Fetching data from loaded MIDI file
                MIDI.Player.addListener(function(data) { 
                    if(data.channel = 1)
                        console.log('Message: ' + data.message + '   | Note: ' + data.note + '  | Time: ' + data.now);
>>>>>>> 274aa059c11faad9e422731c3f465e8ddf102001
                });

            }      
        })
        

    });

}




        
        