const taskInput = document.getElementById('taskInput');
const addBuutton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

loadTasks();

// function addTask() {

//     const task = taskInput.value.trim();

//     if (task) {

//         createTaskElement(task);

//         taskInput.value = '';

//          saveTasks();

//     } else {

//         alert('please enter a task!');

//     }

// }

addBtn.addEventListener('click', addTask);


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
        tasks.push(item.textContent.replace('delete', '').trim());
    });

        localStorage.setItem('tasks', JSON.stringify(tasks));
}

    function loadTasks() {

        const tasks = JSON.parse(localStorage.getItem('task')) || [];
        tasks.foreach(createTaskElement);
    }

