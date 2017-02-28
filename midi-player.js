
function startMidiPlayer(){

    var player = MIDI.Player;

  //  player.timeWarp = 1.5; // speed the song is played back

    player.loadFile('MIDI-files/purplechanged2.mid', function(){
        console.log('Loaded MIDI file contains following instruments: ');
        console.log(player.getFileInstruments());

        MIDI.loadPlugin({
            soundfontUrl: './soundfonts/',
            instruments: player.getFileInstruments(),
            onsuccess: function(){

                //player.timeWarp = 1.5; // speed the song is played back
                
                player.start();
                MIDI.Player.addListener(function(data) { 
                    var channel = data.channel;
                  
                    if(channel == 2){
                        console.log('Note: ' + data.note + '  | Time: ' + data.now + '  | channel: ' + data.channel);
                        
                   }
                        
                });

            }      
        })
        

    });

}




        
        