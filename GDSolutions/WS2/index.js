angular.module('MyApp', [])

.controller('PlaylistController', function(SelectionModel) {
	var self = this;
	self.playlist = new SelectionModel();
});
