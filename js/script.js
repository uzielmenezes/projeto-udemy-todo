class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {
        // TEMPLATE clone
        let template = document.querySelector('.task').cloneNode(true);
        // remove class hide
        template.classList.remove('hide');
        // text managing
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;
        
        let list = document.querySelector('#tasks-container');

        //insert to list
        list.appendChild(template);
    }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let taskText = document.querySelector('#task');

    if(taskText.value != '') {
        todo.addTask(taskText.value);
    }

    // clear text field
    taskText.value = '';
})