document.addEventListener('DOMContentLoaded', ()=>{
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const form = document.getElementById('taskForm');

    loadTask();


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText !== ''){
            addTask(taskText);
            taskInput.value = '';
            saveTask(taskText);

        }
    });

    function addTask(taskText){
        const li = document.createElement('li');
        li.classList.add('todo-item')
        const todoSpan = document.createElement('span')
        todoSpan.classList.add('todo-text')
        todoSpan.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteTask')
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', ()=>{
            li.remove();
            deleteTask(taskText); //deleting the task//
    });

    const list = document.querySelector('#taskList')
    li.appendChild(todoSpan)
    li.appendChild(deleteButton);
    list.appendChild(li);
}

    function loadTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));

    }

    function saveTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks)); /* YOu were not saving the tasks. Callin
        g JSON.stringify('tasks') will instead put the string value 'tasks' in localstorage, rather then the array called tasks */



    }

    function deleteTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks)); /* YOu were not saving the tasks. Callin
        g JSON.stringify('tasks') will instead put the string value 'tasks' in localstorage, rather then the array called tasks */

    }
        
});