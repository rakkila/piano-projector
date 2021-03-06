
function startMidiPlayer(){

    var player = MIDI.Player;

    player.timeWarp = 1.2; // speed the song is played back

    player.loadFile('MIDI-files/purple_rain.mid', function(){
        console.log('Loaded MIDI file contains following instruments: ');
        console.log(player.getFileInstruments());

        //Loading required soundfonts for playing the MIDI file
        MIDI.loadPlugin({
            soundfontUrl: './soundfonts/',
            instruments: player.getFileInstruments(),
            onsuccess: function(){
                
                player.start();
                    
                //Set output volume and start player
                MIDI.setVolume(0,50);
                player.start();

                //Fetching data from loaded MIDI file
                MIDI.Player.addListener(function(data) { 
                    if(data.channel == 1)
                        console.log('Message: ' + data.message + '   | Note: ' + data.note + '  | Time: ' + data.now);

                });

            }      
         })
        

    });

}




        
        