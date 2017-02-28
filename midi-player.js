
function initMidiPlayer(){

    var player = MIDI.Player;

    player.timeWarp = 1.5; // speed the song is played back

    player.loadFile('MIDI-files/closer.mid', function(){
        console.log(player.getFileInstruments().program);

        MIDI.loadPlugin({
            soundfontUrl: './soundfonts/',
            instruments: player.getFileInstruments(),
            onsuccess: function(){

                //player.timeWarp = 1.5; // speed the song is played back

                MIDI.Player.addListener(function(data) { // set it to your own function!

                });

            player.start();

            }      
        })
        

    });

}




        
        