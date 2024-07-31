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

export function addProjectToList(project) {
    projects.push(project);
    renderProjects();
}

export function renderProjects() {
    const projectList = document.querySelector('.projects-list');
    projectList.innerHTML = '';
    projects.forEach((project) => {
        const projectItem = createProjectItem(project);
        projectList.appendChild(projectItem);
    });
}

export function createProjectItem(project) {
    const projectItem = document.createElement('li');
    projectItem.className = 'project';

    const projectButton = document.createElement('button');
    projectButton.className = 'project-folder';
    projectButton.textContent = project.name;
    projectButton.dataset.criteria = project.name;

    projectItem.appendChild(projectButton);

    return projectItem;
}