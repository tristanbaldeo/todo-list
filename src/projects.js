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