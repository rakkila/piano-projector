
function initMidiPlayer(){

    let instruments = ['acoustic_grand_piano', 'electric_guitar_clean'];

    MIDI.loadPlugin({
        soundfontUrl: './soundfonts/',
        instrument: instruments,
        onsuccess: function(){

            var player = MIDI.Player;
            player.timeWarp = 1.5; // speed the song is played back
            player.loadFile('MIDI-files/purple_rain.mid', player.start);
            //MIDI.programChange(0, MIDI.GM.byName[instruments].number);

        }

    })

}




        
        