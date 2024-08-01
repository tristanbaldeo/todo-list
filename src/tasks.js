import {saveTasks, loadTasks} from './storage';

let tasks = loadTasks();
let currentCriteria = 'all';

// Factory function to create task object
function createTask(name, notes, date, priority, location) {
    return {
        id: Date.now().toString(),
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
    saveTasks(tasks);
    renderTasks(currentCriteria);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = String(date.getDate() + 1).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

export function renderTasks(criteria = 'all') {
    currentCriteria = criteria;
    const taskList = document.querySelector('.task-list');
    taskList.innerHTML = '';

    let filteredTasks = tasks;

    if (criteria === 'priority') {
        filteredTasks = tasks.filter(task => task.priority === 'Priority');
    } else if (criteria === 'today') {
        const today = new Date().toISOString().split('T')[0];
        filteredTasks = tasks.filter(task => task.date === today);
    } else if (criteria !== 'all') {
        filteredTasks = tasks.filter(task => task.location === criteria);
    }

    filteredTasks.forEach((task, index) => {
        const taskItem = createTaskItem(task, index);
        taskList.appendChild(taskItem);
    });
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

function createTaskItem(task, index) {
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
    taskName.textContent = task.name;

    const taskNotes = document.createElement('p');
    taskNotes.className = 'task-notes';
    taskNotes.textContent = task.notes;

    const metadata = document.createElement('p');
    metadata.className = 'metadata';
    metadata.textContent = formatDate(task.date);

    taskItemData.appendChild(taskName);
    taskItemData.appendChild(taskNotes);
    taskItemData.appendChild(metadata);

    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options';

    taskItem.appendChild(taskComplete);
    taskItem.appendChild(taskItemData);
    taskItem.appendChild(taskOptions);

    checkbox.addEventListener('click', () => {
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        tasks.splice(taskIndex, 1);
        saveTasks(tasks);
        renderTasks(currentCriteria);
    });
    return taskItem;
}