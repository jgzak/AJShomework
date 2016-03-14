'use strict';

angular.module('sampleNode')

.factory('TodoAddResource', function($resource) {
	return $resource('/api/addtodo', null, {
			addToDo: {
				method: 'PUT',
				headers: {
					Accept: 'application/json'
				}
			}
		});
})

.factory('TodoListResource', function($resource) {
	return $resource('/api/getTodos', null, {
			getAllToDos: {
				method: 'GET',
				isArray: true,
				headers: {
					Accept: 'application/json'
				}
			}
		});
})

.factory('TodoDetailsResource', function($resource) {
	return $resource('/api/getTodoDetails/:id/', null, {
			getToDoDetails: {
				method: 'GET',
				id: '@id'
			}
		});
})

.factory('TodoUpdateResource', function($resource) {
	return $resource('/api/updateTodo', null, {
			updateToDo: {
				method: 'POST',
				headers: {
					Accept: 'application/json'
				}
			}
		});
});