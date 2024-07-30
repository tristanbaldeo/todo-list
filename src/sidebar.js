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
