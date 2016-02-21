angular.module('MyApp', [])

.controller('MainController', function($scope) {
	var self = this;

	self.showEdit = false;
	self.showSolid = true;
	self.fname='Julius';
	self.lname='Zak';

	self.tempfname = '';
	self.templname ='';

	self.toDos = [];

	

	self.interArray = [ {name: 'Personal', files:[]}, {name:'Work', files:[]}, {name: 'Trip', files:[]}],
	self.newFile ='',
	self.folderIndex = 0,

	

	self.toDoPriorityClass =2;


	$scope.$watch('ctrl.toDoPriorityClass', function(newValue, oldValue) { 
		debugger;
		if(newValue === 0) {
			self.priorityClass = 'toDoHigh';
		} else if(newValue === 1) {
			self.priorityClass = 'toDoMedium';
		} else if (newValue  === 2) {
			self.priorityClass = 'toDoLow';
		}



	});

	// $scope.$watch('ctrl.folderIndex', function(a, b) { console.log('folderIndex changed: old: ' + a + ' new:' + b)});


	// $scope.$watch('ctrl.classObject', function(a, b) { console.log('classObject changed: old: ' + a + ' new:' + b)});


	self.onAddToDo = function () {
		debugger;
		console.log('onAddToDo inviked .....');
		var todo = {};
		todo.toDo = this.toDo;
		todo.description = this.toDoDescription;
		todo.priority = self.priorityClass;
		self.toDos.push(todo);

	}

	self.onRemoveToDo = function(index) {
		console.log('removing: ' + index);
		self.toDos.splice(index, 1);
	}


	self.myEdit = function () {
		console.log('myEdit was clicked');
		var me = this;
		me.tempfname = self.fname;
		me.templname = self.lname;
		me.showEdit = true;
		me.showSolid = false;
	}


	self.mySave = function () {
		console.log('mySave was clicked');
		var me = this;
		me.fname = me.fname;
		me.lname = me.lname;
		me.showEdit = false;
		me.showSolid = true;
	}



	self.myCancel = function () {
		console.log('myCancel was clicked');
		var me = this;
		me.showEdit = false;
		me.showSolid = true;
		me.fname = self.tempfname;
		me.lname = self.templname;
	}

	
	

	self.addNewFile = function () {
		console.log('addNewFiles invoked ....');
		self.interArray[self.folderIndex].files.push({name: self.newFile});
	}



	self.showFiles = false;



	self.priorityLow = {
		toDoHigh: false,
		toDoMedium: false,
		toDoLow: true
	},

	self.priorityMedium = {
		toDoHigh: false,
		toDoMedium: true,
		toDoLow: false
	},

	self.priorityHigh = {
		toDoHigh: true,
		toDoMedium: false,
		toDoLow: false
	},

	self.priorityClass = self.priorityLow;


	self.classObject = {
		
		top: {
			strongRed: false,
			strongGreen: false,
			strongYellow: false
		},

		bottom: {
			lightRed: false,
			lightGreen: false,
			lightYellow: false
		},

		container: {
			superLightRed: false,
			superLightGreen: false,
			superLightYellow: false
		}
	},


	self.classInit = self.classObject,



	self.classRed = {
		top: {
			strongRed: true,
			strongGreen: false,
			strongYellow: false
		},

		bottom: {
			lightRed: true,
			lightGreen: false,
			lightYellow: false
		},

		container: {
			superLightRed: true,
			superLightGreen: false,
			superLightYellow: false
		}
	},


	self.classGreen = {
		top: {
			strongRed: false,
			strongGreen: true,
			strongYellow: false
		},

		bottom: {
			lightRed: false,
			lightGreen: true,
			lightYellow: false
		},

		container: {
			superLightRed: false,
			superLightGreen: true,
			superLightYellow: false
		}
	},

	self.classYellow = {
		top: {
			strongRed: false,
			strongGreen: false,
			strongYellow: true
		},

		bottom: {
			lightRed: false,
			lightGreen: false,
			lightYellow: true
		},

		container: {
			superLightRed: false,
			superLightGreen: false,
			superLightYellow: true
		}
	}

});