angular.module('MyApp', [])

.controller('TodoController', function() {
	var self = this;
	self.todos = [];

	self.addTodo = function(todo) {
		self.todos.push(todo);
		self.todo = {};
	};

	self.removeTodo = function(todo) {
		var index = self.todos.indexOf(todo);
		self.todos.splice(index, 1);
	};
});
