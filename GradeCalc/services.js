angular.module('JZServices', [])


.service('AvgCalculator', function() {
	var self = this;



	self.calcAvg = function(assignments) {

		if(assignments.length === 0) return 'N/A';
		var sum = 0;
		var counter = 0;
		for(counter; counter < assignments.length; counter++) {
			sum += assignments[counter].grade;
		}
		return Math.round(sum / counter);
	}

	self.calcGrd = function(assignments) {
		
		var avg = self.calcAvg(assignments);
		if(avg >= 90 ) {
			return 'A';
		} else if (avg >= 80) {
			return 'B';
		} else if (avg >= 70) {
			return 'C'
		} else if (avg >= 60 ) {
			return 'D'
		} else  if (avg < 60 ){
			return 'F';
		} else {
			return 'N/A';
		}
	}

	self.calcPss = function(assignments) {
		var grd = self.calcGrd(assignments);
		if (grd === 'N/A') return 'N/A';
		if (grd === 'F') return false;
		return true;
	}
})





.factory('Assignment', function() {


	function Assignment(params) {
		angular.extend(this, params);
	}


	Assignment.prototype.setName = function(name) {
	    this.name = name;
	};


	Assignment.prototype.setGrade = function(grade) {
	    this.grade = grade;
	};

	Assignment.prototype.getGrade = function() {
	    return this.grade;
	};



	return Assignment;
});

