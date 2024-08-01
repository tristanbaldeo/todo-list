import './style.css';
import {initializeApp} from './dom';
import {initializeSidebar, sidebarNavigation} from './sidebar';
import {submitForm, toggleDialogBox, renderTasks} from './tasks';
import {toggleProjectInput, handleProjectInput, renderProjects, updateProjectDropdown} from './projects';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initializeSidebar();

    const dialogForm = document.querySelector('.dialog-form');
        dialogForm.addEventListener('submit', submitForm);

    const addTaskMain = document.querySelector('.add-task-main');
        addTaskMain.addEventListener('click', () => toggleDialogBox(true));

    const addTaskSide = document.querySelector('.add-task-sidebar');
        addTaskSide.addEventListener('click', () => toggleDialogBox(true));

    const closeButton = document.querySelector('.dialog-box .close');
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleDialogBox(false);
        });

    const addProjectButton = document.querySelector('.add-project');
        addProjectButton.addEventListener('click', () => toggleProjectInput());

    const projectInput = document.querySelector('.new-project');
        projectInput.addEventListener('keypress', handleProjectInput);

    renderTasks();
    renderProjects();
    updateProjectDropdown();
    sidebarNavigation()
});