var handlers = {
	addTodos: function () {
		var addTodosText = document.getElementById('textInput');
		todos.addTodos(addTodosText.value);
		addTodosText.value = '';
		view.displayTodos();
	},
	changeTodos: function () {
		var cnageTodoPosition = document.getElementById('changeTodoPosition');
		var changeTodoText = document.getElementById('changeTodoText');
		todos.changeTodos(changeTodoPosition.valueAsNumber, changeTodoText.value);
		changeTodoText.value = '';
		cnageTodoPosition.value = '';
		view.displayTodos();
	},
	deleteTodos: function (position) {
		todos.deleteTodos(position);
		view.displayTodos();
	},
	toggleCompleted: function () {
		var toggleCompleted = document.getElementById('toggleCompleted');
		todos.toggleCompleted(toggleCompleted.valueAsNumber);
		toggleCompleted.value = '';
		view.displayTodos();
	},
	toggleAll: function () {
		todos.toggleAll();
		view.displayTodos();
	}
};

var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		// for (var i = 0; i < todos.todoList.length; i++) {
		// 	var todosLi = document.createElement('li');
		// 	var todo = todos.todoList[i];
		// 	var todosTextWithCompletion = '';
    //
		// 	if (todo.completed === true) {
		// 		todosTextWithCompletion = '(x) ' + todo.listItem;
		// 	}else {
		// 		todosTextWithCompletion = '() ' + todo.listItem;
		// 	}
		// 	todosLi.id = i;
		// 	todosLi.textContent = todosTextWithCompletion;
		// 	//todosLi.textContent = todos.todoList[i].listItem;
		// 	todosLi.appendChild(this.createDeleteButton());
		// 	todosUl.appendChild(todosLi);
		// }

		todos.todoList.forEach(function (todo, position) {
			var todosLi = document.createElement('li');
			var todosTextWithCompletion = '';
			if (todo.completed === true) {
			 		todosTextWithCompletion = '(x) ' + todo.listItem;
			 	}else {
			 		todosTextWithCompletion = '() ' + todo.listItem;
			 	}
			 	todosLi.id = position;
			 	todosLi.textContent = todosTextWithCompletion;
			 	todosLi.appendChild(this.createDeleteButton());
			 	todosUl.appendChild(todosLi);
		}, this);
	},
	createDeleteButton: function () {
		var deleteButton = document.createElement('Button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListener: function () {
		var todosUl = document.querySelector('ul');
		todosUl.addEventListener('click', function (event) {
			var elementClicked = event.target;
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
			};
		});
	}
};
view.setUpEventListener();

// adding display method
var todos = {
	todoList:[],
	// adding add method
	addTodos:function (addItem) {
		this.todoList.push({
			listItem: addItem,
			completed: false
		});
	},
	// change todo
	changeTodos:function (position, newValue) {
		this.todoList[position].listItem=newValue;
	},
	// delete todo
	deleteTodos:function (position) {
		this.todoList.splice(position, 1);
	},
	// toggle completed
	toggleCompleted: function(position) {
		var todo = this.todoList[position];
		todo.completed = !todo.completed;
	},
	// toggleAll function
	toggleAll: function() {
		var totalTodoList = this.todoList.length;
		var completedTodoList = 0;

		this.todoList.forEach(function (todo) {
			if (todo.completed === true) {
				completedTodoList ++;
			}
		});

			// if (completedTodoList === totalTodoList) {
			// 	this.todoList.forEach(function (todo) {
			// 		todo.completed = false;
			// 	});
			// }else {
			// 	this.todoList.forEach(function (todo) {
			// 		todo.completed = true;
			// 	});
			// }
			this.todoList.forEach(function (todo) {
				if (completedTodoList === totalTodoList) {
					todo.completed = false;
				}else {
					todo.completed = true;
				}
			});
		}
};
