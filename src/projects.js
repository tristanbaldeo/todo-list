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