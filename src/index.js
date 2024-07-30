import './style.css';
import {initializeApp} from './dom';
import {initializeSidebar} from './sidebar';
import {submitForm, toggleDialogBox} from './tasks';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initializeSidebar();

    const dialogForm = document.querySelector('.dialog-form');
    if (dialogForm) {
        dialogForm.addEventListener('submit', submitForm);
    }

    const addTaskMain = document.querySelector('.add-task-main');
    if (addTaskMain) {
        addTaskMain.addEventListener('click', () => toggleDialogBox(true));
    }

    const addTaskSide = document.querySelector('.add-task-sidebar');
    if (addTaskSide) {
        addTaskSide.addEventListener('click', () => toggleDialogBox(true));
    }

    const closeButton = document.querySelector('.dialog-box .close');
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            toggleDialogBox(false);
        });
    }
});