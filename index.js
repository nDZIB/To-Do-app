document.addEventListener('DOMContentLoaded', ()=>{
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const form = document.getElementById('taskForm');

    loadTask();


    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (tasktext !== ''){
            addTask(taskText);
            input.value = '';
            saveTask(taskText);

        }
    });

    function addTask(taskText){
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', ()=>{
            li.remove();
            deleteTask(taskText); //deleting the task//
    });

    li.appendChild(deleteButton);
    list.appendChild(list);
}

    function loadTask() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task));

    }

    function saveTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify('tasks'));


    }

    function deleteTask(tasktext) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify('tasks'));

    }
        
});