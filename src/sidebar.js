import {renderTasks} from './tasks';

export function initializeSidebar() {
    document.getElementById('dock-sidebar').addEventListener('click', toggleSidebar);
    document.getElementById('dock-main').addEventListener('click', toggleSidebar);
}

function toggleSidebar() {
    const content = document.getElementById('content');
    const sidebar = document.getElementById('sidebar');
    const dockMain = document.getElementById('dock-main');
    const dockSidebar = document.getElementById('dock-sidebar');
    const body = document.body;

    content.classList.toggle('hidden');
    sidebar.classList.toggle('hidden');
    dockSidebar.classList.toggle('hidden');
    dockMain.classList.toggle('hidden');
    body.classList.toggle('no-grid');
}

// Active sidebar buttons
export function sidebarNavigation() {
    const sidebarButtons = document.querySelectorAll('.tasks button:not(.add-task-sidebar, .add-project)');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const selectedTab = e.currentTarget;
            sidebarButtons.forEach(btn => btn.classList.remove('active'));
            selectedTab.classList.add('active');

            const h2 = document.querySelector('h2');
            h2.textContent = selectedTab.textContent;

            const criteria = selectedTab.dataset.criteria;
            renderTasks(criteria);
        });
    });
    document.querySelector('.all-tasks').click();
}