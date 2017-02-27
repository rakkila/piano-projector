/**
 * Fetching MIDI-data from MIDI Input
 * Using soundfont-player.js for loading soundfont and play sound
 * Using WebMidi for eventListeners
 */

/*
window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfonts/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
			var delay = 0; // play one note every quarter second
			var note = 50; // the MIDI note
			var velocity = 127; // how hard the note hits
			// play the note
			MIDI.setVolume(0, 127);
			MIDI.noteOn(0, note, velocity, delay);
			MIDI.noteOff(0, note, delay + 0.75);
		}
	});
};

*/

eventjs.add(window, "load", function(event) {
	
		MIDI.loader = new sketch.ui.Timer;
		MIDI.loadPlugin({
			soundfontUrl: "./soundfonts/",
			onprogress: function(state, progress) {
				MIDI.loader.setValue(progress * 100);
			},
			onsuccess: function() {
				/// this is the language we are running in
				var title = document.getElementById("title");
				title.innerHTML = "Sound being generated with " + MIDI.api + " " + JSON.stringify(MIDI.supports);
				/// this sets up the MIDI.Player and gets things going...
				player = MIDI.Player;
				player.timeWarp = 1; // speed the song is played back
				player.loadFile('MIDI-files/purple_rain.mid', player.start);
				/// control the piano keys colors
				var colorMap = MIDI.Synesthesia.map();
				player.addListener(function(data) {
					var pianoKey = data.note - 21;
					var d = colorElements[pianoKey];
					if (d) {
						if (data.message === 144) {
							var map = colorMap[data.note - 27];
							if (map) d.style.background = map.hex;
							d.style.color = "#fff";
						} else {
							d.style.background = "";
							d.style.color = "";
						}
					}
				});
			}
		});
	});




 
