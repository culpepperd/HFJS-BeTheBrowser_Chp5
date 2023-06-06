// create song object with name/artist/minutes/seconds/genre/playing properties
// and play() and pause() methods
var song = {
	name: "Walk This Way",
	artist:"Run-D.M.C.",
	minutes: 4,
	seconds: 3,
	genre: "80's",
	playing: false,
	// play() method
	play: function () {
		if (!this.playing) {
			this.playing = true;
			console.log("Playing: " + this.name + " by, " + this.artist);
		}
	}, // need a comma after each property/method except the last

	// pause() method
	pause: function () {
		if (this.playing) {
			this.playing = false;
		}
	}
};
// call play() method
song.play();
// call pause() method
song.pause();