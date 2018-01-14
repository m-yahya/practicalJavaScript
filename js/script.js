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
