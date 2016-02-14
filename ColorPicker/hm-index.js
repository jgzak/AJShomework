angular.module('MyApp', [])

.controller('MainController', function() {
	var self = this;


	self.interArray = [ {name: 'Personal', files:[]}, {name:'Work', files:[]}, {name: 'Trip', files:[]}],
	self.newFile ='',
	self.folderIndex = 0,

	self.addNewFile = function () {
		console.log('addNewFiles invoked ....');
		self.interArray[self.folderIndex].files.push({name: self.newFile});
	}



	self.showFiles = false;
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