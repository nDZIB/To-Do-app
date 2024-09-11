const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const form = document.getElementById('taskForm');

loadTasks();

function addTask(event) {
    event.preventDefault()

    const task = taskInput.value.trim();

    if (task) {

        createTaskElement(task);

        taskInput.value = '';

         saveTasks();

    } else {

        alert('please enter a task!');

    }

}

form.addEventListener('submit', addTask)

function createTaskElement(task) {

    const listItem = document.createElement('li');

    listItem.textContent = task;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteTask';

    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    deleteButton.addEventListener('click', function(){
        taskList.removeChild(listItem);
        saveTasks();

    });
    
}

function saveTasks() {
    let tasks = [];
    taskList.querySelectorAll('li').forEach(function(item) {
        tasks.push(item.textContent.replace('Delete', '').trim());
    });

        localStorage.setItem('tasks', JSON.stringify(tasks));
}

    function loadTasks() {

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        console.log(tasks);
        
        tasks.forEach(createTaskElement);
    }

    function deleteTask() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

