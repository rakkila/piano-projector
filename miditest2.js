/**
 * MIDI Input to Soundfont player (MIDI.js)
 */
/*
window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {

			var player = MIDI.player;
			player.loadFile('MIDI-files/purple_rain.mid', player.start);
			player.addListener(function(data){

				console.log(data.subtype);
			});

			

			/*
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 1);
			
		}
	});
};
*/


eventjs.add(window, "load", function(event) {
	
		MIDI.loader = new sketch.ui.Timer;
		MIDI.loadPlugin({
			soundfontUrl: "./soundfont/",
			instrument: ["acoustic_grand_piano"],
			onprogress: function(state, progress) {
			},
			onsuccess: function() {

				player = MIDI.Player;
				//player.timeWarp = 1; // speed the song is played back
				player.loadFile('MIDI-files/purple_rain.mid', player.start);
				MIDI.programChange(0, 0);
	
				player.addListener(function(data) {
					console.log(data.note);
				});
			}
		});
	});




 
