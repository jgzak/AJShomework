angular.module('MyApp', [
	'JZServices'])

.controller('MainController', function(Assignment, AvgCalculator, $scope) {
	var self = this;

	self.assignments = [];
	self.avg = 'N/A';
	self.grd = 'N/A';
	self.pss = 'N/A'

	self.addAssignment = function() {
		console.log('addAsignment: Name: ' + self.assignmentName + ', Grade: ' + self.assignmentGrade);
		if(self.assignmentName === undefined) return;
		if(self.assignmentGrade === undefined) return;
		var assignment = new Assignment( { name: self.assignmentName, grade: Number(self.assignmentGrade)} );
		self.assignments.push(assignment);
		self.calcGrdInfo();	
	}

	self.calcGrdInfo = function () {
		console.log('calcGrdInfo');
		self.avg = AvgCalculator.calcAvg(self.assignments);
		self.grd = AvgCalculator.calcGrd(self.assignments);
		self.pss = AvgCalculator.calcPss(self.assignments);
	}

});
