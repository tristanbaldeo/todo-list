import {sidebarNavigation} from './sidebar';

let projects = [];

function createProject(name) {
    return {
        name
    };
}

export function toggleProjectInput() {
    const projectInputContainer = document.querySelector('.add-project-container');
    projectInputContainer.style.display = projectInputContainer.style.display === 'block' ? 'none' : 'block';
}

export function handleProjectInput(e) {
    if (e.key === 'Enter') {
        const projectName = e.target.value.trim();
        const newProject = createProject(projectName);
        addProjectToList(newProject);
        e.target.value = '';
        toggleProjectInput();
    }
}

function addProjectToList(project) {
    projects.push(project);
    renderProjects();
    updateProjectDropdown();
    sidebarNavigation();
}

function renderProjects() {
    const projectList = document.querySelector('.projects-list');
    projectList.innerHTML = '';
    projects.forEach((project) => {
        const projectItem = createProjectItem(project);
        projectList.appendChild(projectItem);
    });
}

function createSVG(namespace, pathData, width, height) {
    const svg = document.createElementNS(namespace, 'svg');
    svg.setAttribute('xmlns', namespace);
    svg.setAttribute('height', height);
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('width', width);

    const path = document.createElementNS(namespace, 'path');
    path.setAttribute('d', pathData);

    svg.appendChild(path);

    return svg;
}

function createProjectItem(project) {
    const projectItem = document.createElement('li');
    projectItem.className = 'project';

    const projectButton = document.createElement('button');
    projectButton.className = 'project-folder';
    projectButton.textContent = project.name;
    projectButton.dataset.criteria = project.name;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-project';
    deleteButton.title = 'Delete';
    deleteButton.innerHTML = `
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 485 485" xml:space="preserve" stroke="#f4f4f4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect x="67.224" width="350.535" height="71.81"></rect> <path d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447 h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"></path> </g> </g> </g></svg>
    `;
    deleteButton.addEventListener('click', () => {
        deleteProject(project.name);
    });

    projectItem.appendChild(projectButton);
    projectItem.appendChild(deleteButton);

    return projectItem;
}

function updateProjectDropdown() {
    const taskProjectSelect = document.querySelector('select[name="location"]');
    const projectOptGroup = taskProjectSelect.querySelector('optgroup[label="Projects"]');
    projectOptGroup.innerHTML = '';
    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.name;
        option.textContent = project.name;
        projectOptGroup.appendChild(option);
    })
}

function deleteProject(projectName) {
    projects = projects.filter(project => project.name !== projectName);
    renderProjects();
    updateProjectDropdown();
    sidebarNavigation();
}