angular.module('MyApp')

.factory('SudentInfo', function(GradeService) {

	function StudentInfo() {
		this.name = undefined;
		this.average = 'N/A';
		this.grade = 'N/A';
		this.passing = 'N/A';
		this.inputAssignment = {};
		this.assignments = [];
	}

	StudentInfo.prototype.addAssignment = function(assignment) {
		this.assignments.push(assignment);
		this.inputAssignment = {};
		this.average = GradeService.calcuateAverage(this.assignments);
		this.grade = GradeService.calcuateGrade(this.average);
		this.passing = GradeService.calculatePassing(this.grade);
	};

	return StudentInfo;
})

.service('GradeService', function(GRADE_CRITERIA, PASSING_CRITERIA) {
	var self = this;
	self.calcuateAverage = function(assignments) {
		var sum = 0;
		for (var i = assignments.length - 1; i >= 0; i--) {
			sum += assignments[i].grade;
		}
		return sum/assignments.length;
	};

	self.calcuateGrade = function(average) {
		for (var i = 0; i < GRADE_CRITERIA.length; i++) {
			if (average >= GRADE_CRITERIA[i].MINIMUM) {
				return GRADE_CRITERIA[i].GRADE;
			}
		}
		return 'N/A';
	};

	self.calculatePassing = function(grade) {
		return PASSING_CRITERIA[grade];
	};
})

.value('GRADE_CRITERIA', [{
		GRADE: 'A',
		MINIMUM: 90
	}, {
		GRADE: 'B',
		MINIMUM: 80
	}, {
		GRADE: 'C',
		MINIMUM: 70
	}, {
		GRADE: 'D',
		MINIMUM: 60
	}, {
		GRADE: 'F',
		MINIMUM: 0
	}
])

.value('PASSING_CRITERIA', {
	A: true,
	B: true,
	C: true,
	D: false,
	F: false
});
