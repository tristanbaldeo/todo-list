import './style.css';
import {initializeApp} from './dom';
import {initializeSidebar} from './sidebar';

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    initializeSidebar();
});