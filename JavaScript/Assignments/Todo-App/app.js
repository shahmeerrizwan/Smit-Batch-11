const todo = document.querySelector('#todo');
const ul = document.querySelector('#ul');

const arr = [];
function renderTodo() {
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `
        <li>${arr[i]}
        <button class="btn" onclick="deleteTodo(${i})">delete</button>
        <button class="btn"  onclick="editTodo(${i})">edit</button>
        </li>`
    }
}
function addTodo() {
    ul.innerHTML = '';
    arr.push(todo.value);
    renderTodo()
    todo.value = '';
}
function deleteTodo(i) {
    ul.innerHTML = '';
    arr.splice(i, 1);
    renderTodo()
}
function editTodo(i) {
    ul.innerHTML = '';
    const editedVal = prompt('enter value to update');
    arr.splice(i, 1, editedVal);
    renderTodo();
}