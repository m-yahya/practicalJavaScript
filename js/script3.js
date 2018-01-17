// create display button variable
var displayButton = document.getElementById('display');
// add click event to button
displayButton.addEventListener('click', function() {
	todos.displayTodos();
});

// create toggleAll button variable
var displayButton = document.getElementById('toggleAll');
// add click event to button
displayButton.addEventListener('click', function() {
	todos.toggleAll();
});


// adding display method
var todos = {
	todoList:[],
	displayTodos:function () {
		//list can be empty and in this case empty message
		// if the list is filled then two option
		// either its complete or not so check both situations
		if (this.todoList.length === 0) {
			console.log('The list is empty!');
		}else {
			console.log('List is:');
			for (var i = 0; i < this.todoList.length; i++) {
				if (this.todoList[i].completed === true) {
					console.log('(x)', this.todoList[i].listItem);
				}else {
					console.log('()', this.todoList[i].listItem);
				}
			}
		}
	},
	// adding add method
	addTodos:function (addItem) {
		this.todoList.push({
			listItem: addItem,
			completed: false
		});
		this.displayTodos();
	},
	// change todo
	changeTodos:function (position, newValue) {
		this.todoList[position].listItem=newValue;
		this.displayTodos();
	},
	// delete todo
	deleteTodos:function (position, length) {
		this.todoList.splice(position, length);
		this.displayTodos();
	},
	// toggle completed
	toggleCompleted: function(position) {
		var todo = this.todoList[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	// toggleAll function
	toggleAll: function() {
		var totalTodoList = this.todoList.length;
		var completedTodoList = 0;
		for (var i = 0; i < totalTodoList; i++) {
			if (this.todoList[i].completed === true) {
				completedTodoList ++;
			}
		}
		if (completedTodoList === totalTodoList) {
			for (var i = 0; i < totalTodoList; i++) {
				this.todoList[i].completed = false;
			}
		}else {
			for (var i = 0; i < totalTodoList; i++) {
				this.todoList[i].completed = true;
			}
		}
		this.displayTodos();
	}
};
