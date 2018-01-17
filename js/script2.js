var todos=['item 1','item 2','item 3','item 4'];
function displayTodos() {
	console.log(todos);
};
displayTodos();

function addTodos(todo) {
	todos.push(todo);
	console.log(todos);
};
addTodos('new item');

function changeTodos(position, newItem) {
	todos[position] = newItem;
	console.log(todos);
};
changeTodos(0, 'replaced');

function deleteTodos(start) {
	todos.splice(start, 1);
	console.log(todos);
};
deleteTodos(0);

// adding display method
var todos = {
	todoList:['item 1','item 2','item 3','item 4'],
	displayTodos:function () {
		console.log('My todos:', this.todoList);
	},
	// adding add method
	addTodos:function (newItem) {
		this.todoList.push(newItem);
		this.displayTodos();
	},
	// change todo
	changeTodos:function (position, newValue) {
		this.todoList[position]=newValue;
		this.displayTodos();
	},
	// delete todo
	deleteTodos:function (position, length) {
		this.todoList.splice(position, length);
		this.displayTodos();
	}
};
//////////////////////////////////////////////////
// adding display method
var todos = {
	todoList:[],
	displayTodos:function () {
		if (this.todoList.length ===0) {
			console.log('list is empty');
		}else {
			console.log('list is:');
			for (var i = 0; i < this.todoList.length; i++) {
				if (this.todoList[i].completed === true) {
					console.log('(x)',this.todoList[i].addItem);
				}else {
					console.log('()',this.todoList[i].addItem);
				}
			}
		}

	},
	// adding add method
	addTodos:function (addItem) {
		this.todoList.push({
			addItem: addItem,
			completed: false
		});
		this.displayTodos();
	},
	// change todo
	changeTodos:function (position, newValue) {
		this.todoList[position].addItem=newValue;
		this.displayTodos();
	},
	// delete todo
	deleteTodos:function (position, length) {
		this.todoList.splice(position, length);
		this.displayTodos();
	},
	// toggle completed
	toggleCompleted:function (position) {
		var todo = this.todoList[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	},
	toggleAll:function () {

		var totalTodoList = this.todoList.length;
		var completedTodoList = 0;
		for (var i = 0; i < totalTodoList; i++) {
			if (this.todoList[i].completed === true) {
				completedTodoList++;
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
