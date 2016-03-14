'use strict';

angular.module('sampleNode')

.controller('MainCtrl', function(TodoAddResource, TodoListResource, TodoDetailsResource, TodoUpdateResource) {
  var self = this;


  function getAllTodos() {
    TodoListResource.getAllToDos().$promise.then(function onSuccess(resp) {
      console.log('list of all todos recieved ....');
      self.todos = resp
    });
  }

  self.addTodo = function(todo) {
    TodoAddResource.addToDo(todo).$promise.then(function onSuccess() {console.log('MyToDo added ....')});
  };

  self.editTodo = function(todo) {
    TodoDetailsResource.getToDoDetails({id: todo._id}).$promise
    .then( function onSuccess (resp) {
      self.userTodo = {name: resp.name, description: resp.description, _id: resp._id};
      self.isEditing=true;
    });
    // self.id = todo._id;
    // self.userTodo ={ name: todo.name, description: todo.description };
    
  };

  self.updateTodo = function(todo) {
    self.isEditing=false;
    TodoUpdateResource.updateToDo(todo).$promise.then(function onSuccess() {
      console.log('MyToDo updated ....');
      self.userTodo = {};
    });

  };

  self.cancelUpdate = function() {
    self.isEditing=false;
    self.userTodo = {};
  };

  getAllTodos();
});