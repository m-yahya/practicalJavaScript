var handlers = {
	displayTodos: function () {
		todos.displayTodos();
	},
	addTodos: function () {
		var addTodosText = document.getElementById('textInput');
		todos.addTodos(addTodosText.value);
		addTodosText.value = '';
	},
	changeTodos: function () {
		var cnageTodoPosition = document.getElementById('changeTodoPosition');
		var changeTodoText = document.getElementById('changeTodoText');
		todos.changeTodos(changeTodoPosition.valueAsNumber, changeTodoText.value);
		changeTodoText.value = '';
		cnageTodoPosition.value = '';
	},
	deleteTodos: function () {
		var deleteTodoPosition = document.getElementById('deleteTodoPosition');
		var deleteTodoTextLength = document.getElementById('deleteTodoTextLength');
		todos.deleteTodos(deleteTodoPosition.valueAsNumber, deleteTodoTextLength.valueAsNumber);
		deleteTodoPosition.value = '';
		deleteTodoTextLength.value = '';
	},
	toggleCompleted: function () {
		var toggleCompleted = document.getElementById('toggleCompleted');
		todos.toggleCompleted(toggleCompleted.valueAsNumber);
		toggleCompleted.value = '';
	},
	toggleAll: function () {
		todos.toggleAll();
	}
};

var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		for (var i = 0; i < todos.todoList.length; i++) {
			var todosLi = document.createElement('li');
			var todo = todos.todoList[i];
			var todosTextWithCompletion = '';

			if (todo.completed === true) {
				todosTextWithCompletion = '(x) ' + todo.listItem;
			}else {
				todosTextWithCompletion = '() ' + todo.listItem;
			}

			todosLi.textContent = todosTextWithCompletion;
			//todosLi.textContent = todos.todoList[i].listItem;
			todosUl.appendChild(todosLi);
		}
	}
};


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
