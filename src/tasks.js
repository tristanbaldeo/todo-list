let tasks = [];

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