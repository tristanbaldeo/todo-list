let tasks = [];

// Factory function to create task object
function createTask(name, notes, date, priority, location) {
    return {
        name,
        notes,
        date,
        priority,
        location,
        completed: false
    };
}

function addTaskToList(task) {
    tasks.push(task);
}

function toggleDialogBox(show) {
    const dialogBox = document.querySelector('.dialog-box');
    dialogBox.style.display = show ? 'block' : 'none';
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target.closest('form');
    const addButton = form.querySelector('.add');
    
    if (event.submitter === addButton) {
        const name = form['task-name'].value;
        const notes = form['task-notes'].value;
        const date = form['due-date'].value;
        const priority = form['priority'].value;
        const location = form['location'].value;

        if (name && date) {
            const newTask = createTask(name, notes, date, priority, location);
            addTaskToList(newTask);
            form.reset();
        }
    }
    toggleDialogBox(false);
}

export {submitForm, toggleDialogBox}