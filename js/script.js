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

        // add event to tasks
        this.addEvents();
    }

    removeTask(task) {
        console.log('removeu');
    }

    finishTask(task) {
        console.log('finalizou');
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length -1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length -1];

        // add remove event
        removeBtn.addEventListener('click', () => {
            todo.removeTask(this);
        })

        // add event to finish task
        doneBtn.addEventListener('click', () => {
            todo.finishTask(this);
        })
    }
}

let todo = new Todo();

// events
let addBtn = document.querySelector('#add');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let taskText = document.querySelector('#task');

    if(taskText.value != '') {
        todo.addTask(taskText.value);
    }

    // clear text field
    taskText.value = '';
})