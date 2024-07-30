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
    renderTasks(task);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

function renderTasks(task) {
    const taskList = document.querySelector('.task-list');
    const taskItem = createTaskItem(task.name, task.notes, task.date);
    taskList.appendChild(taskItem);
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

function createTaskItem(name, notes, date) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskComplete = document.createElement('div');
    taskComplete.className = 'task-complete';

    const checkbox = document.createElement('button');
    checkbox.type = 'button';
    checkbox.role = 'checkbox';
    checkbox.setAttribute('aria-checked', 'false');
    checkbox.name = 'delete-item';
    checkbox.title = 'Remove task';
    checkbox.className = 'delete-task';
    taskComplete.appendChild(checkbox);

    const taskItemData = document.createElement('div');
    taskItemData.className = 'task-item-data';

    const taskName = document.createElement('h3');
    taskName.className = 'task-name';
    taskName.textContent = name;

    const taskNotes = document.createElement('p');
    taskNotes.className = 'task-notes';
    taskNotes.textContent = notes;

    const metadata = document.createElement('p');
    metadata.className = 'metadata';
    metadata.textContent = formatDate(date);

    taskItemData.appendChild(taskName);
    taskItemData.appendChild(taskNotes);
    taskItemData.appendChild(metadata);

    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options';

    taskItem.appendChild(taskComplete);
    taskItem.appendChild(taskItemData);
    taskItem.appendChild(taskOptions);

    return taskItem;
}