angular.module('MyApp', [])

.controller('SudentController', function(SudentInfo) {
	var self = this;
	self.student = new SudentInfo();

});
