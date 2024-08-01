const TASKS_KEY = 'tasks';
const PROJECTS_KEY = 'projects';

function saveTasks(tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
}

function saveProjects(projects) {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

function loadProjects() {
    const projects = localStorage.getItem(PROJECTS_KEY);
    return projects ? JSON.parse(projects) : [];
}

export {saveTasks, loadTasks, saveProjects, loadProjects}