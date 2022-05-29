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

        this.checkTasks('add');
    }

    removeTask(task) {
        // find parent element
        let parentEl = task.parentElement;

        // remove from list
        parentEl.remove()

        this.checkTasks('remove');
    }
    
    finishTask(task) {

        // add done's class
        task.classList.add('done');
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash');
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check');
        let doneBtn = doneBtns[doneBtns.length - 1];

        // add remove event
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        // add event to finish task
        doneBtn.addEventListener('click', function() {
            todo.finishTask(this);
        });
    }

    checkTasks(command) {
        let msg = document.querySelector('#empty-tasks');

        // add or remove tasks logic
        if(command === 'add') {
            this.totalTasks += 1;
        } else if(command === 'remove') {
            this.totalTasks -= 1;
        }

        // check for one or more tasks then removes class
        if(this.totalTasks == 1) {
            msg.classList.remove('hide');

        } else {
            msg.classList.add('hide');
        }

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
});