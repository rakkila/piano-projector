
function startMidiPlayer(){

    var player = MIDI.Player;

    player.timeWarp = 1.5; // speed the song is played back

    player.loadFile('MIDI-files/closer.mid', function(){
        console.log('Loaded MIDI file contains following instruments: ');
        console.log(player.getFileInstruments());

        MIDI.loadPlugin({
            soundfontUrl: './soundfonts/',
            instruments: player.getFileInstruments(),
            onsuccess: function(){

                //player.timeWarp = 1.5; // speed the song is played back

                MIDI.Player.addListener(function(data) { 
                    if(data.channel = 1)
                        console.log('Note: ' + data.note + '  | Time: ' + data.now);
                });

            player.start();

            }      
        })
        

    });

}




        
        