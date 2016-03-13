angular.module('MyApp')

.factory('SelectionModel', function(GENRES) {

	function SelectionModel() {
		this.userName = undefined;
		this.userAge = 18;
		this.explictDisabled = false;
		this.genres = GENRES;
		this.selectedGenre = this.genres[0];
		this.selectedSongs = [];
	}

	SelectionModel.prototype.updateAge = function(age) {
		if (age >= 18) {
			this.explictDisabled = false;
		} else {
			this.explictDisabled = true;
			this.explicit = false;
		}
	};

	SelectionModel.prototype.songClicked = function(song) {
		if (song.selected) {
			this.selectedSongs.push(song);
		} else {
			for(var i = 0; i < this.selectedSongs.length; ++i) {
				if (this.selectedSongs[i].name === song.name) {
					this.selectedSongs.splice(i , 1);
					break;
				}
			}
		}
	};

	return SelectionModel;
})

.value('GENRES', [{
	name: 'Rock',
	songs: [{
		name: 'Rock 1',
		artist: 'Rocker 1'
	}, {
		name: 'Rock 2',
		artist: 'Rocker 2'
	}, {
		name: 'Rock 3',
		artist: 'Rocker 3'
	}]
}, {
	name: 'Pop',
	songs: [{
		name: 'Pop 1',
		artist: 'Poper 1'
	}, {
		name: 'Pop 2',
		artist: 'Poper 2'
	}, {
		name: 'Pop 3',
		artist: 'Rocker 3'
	}]
}, {
	name: 'Rap',
	songs: [{
		name: 'Rap 1',
		artist: 'Raper 1'
	}, {
		name: 'Rap 2',
		artist: 'Raper 2'
	}, {
		name: 'Rap 3',
		artist: 'Rocker 3'
	}]
}]);