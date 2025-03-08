const addButton = document.getElementById('add-button');
const todoInput = document.getElementById('todo-input');
const todoList  = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
    const value = todoInput.value;

    const li = document.createElement('li');
    li.innerText = value;

    todoList.appendChild(li);
    todoInput.value = '';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        todoList.removeChild(li);
    })

    li.appendChild(deleteButton);
})

document.querySelectorAll('#todo-list li button').forEach(button => {
    button.addEventListener('click', (event) => {
        const li = event.target.parentElement;
        li.remove();
    });
});
