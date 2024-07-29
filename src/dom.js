export function initializeApp() {
    const content = document.getElementById('content');
    content.appendChild(createSidebar());

    const main = document.getElementById('main');
    main.appendChild(createMain());
  }
  
  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    
    const header = document.createElement('div');
    header.className = 'header';
    
    const h1 = document.createElement('h1');
    h1.className = 'logo';
    h1.textContent = 'To-do List';
  
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dock-sidebar';
    
    const svg = createSVG(
      'http://www.w3.org/2000/svg',
      'M212.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115v-535.382q0-29.923 21.193-51.115 21.192-21.193 51.115-21.193h535.382q29.923 0 51.115 21.193 21.193 21.192 21.193 51.115v535.382q0 29.923-21.193 51.115-21.192 21.193-51.115 21.193H212.309ZM320-200v-560H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846H320Zm59.999 0h367.692q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-535.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H379.999v560ZM320-200H200h120Z',
      '24',
      '24'
    );
  
    button.appendChild(svg);
    
    header.appendChild(h1);
    header.appendChild(button);
    sidebar.appendChild(header);
  
    const tasks = document.createElement('div');
    tasks.className = 'tasks';
  
    const addTaskButton = document.createElement('button');
    addTaskButton.type = 'button';
    addTaskButton.className = 'add-task-sidebar';
  
    const addTaskText = document.createElement('p');
    addTaskText.textContent = 'Add Task (+)';
    addTaskButton.appendChild(addTaskText);
  
    tasks.appendChild(addTaskButton);
    tasks.appendChild(createDialogBoxSidebar());
    tasks.appendChild(createTaskButton('all-tasks', 'All Tasks'));
    tasks.appendChild(createTaskButton('priority-tasks', 'Priority'));
    tasks.appendChild(createTaskButton('today-tasks', 'Today'));
    tasks.appendChild(createProjects());
  
    sidebar.appendChild(tasks);
    
    return sidebar;
  }
  
  function createDialogBoxSidebar() {
    const dialogBox = document.createElement('div');
    dialogBox.className = 'dialog-box-sidebar';
  
    const dialog = document.createElement('div');
    dialog.className = 'dialog';
  
    const form = document.createElement('form');
    form.method = 'dialog';
  
    const taskName = document.createElement('div');
    taskName.className = 'task-name';
  
    const taskNameInput = document.createElement('input');
    taskNameInput.name = 'task-name';
    taskNameInput.className = 'task-name';
    taskNameInput.placeholder = 'Task name (required)';
    taskNameInput.maxLength = 30;
    taskNameInput.autocomplete = 'off';
    taskNameInput.pattern = '^(?!.*\\s{2}).*$';
    taskNameInput.required = true;
    taskName.appendChild(taskNameInput);
  
    const taskNotes = document.createElement('div');
    taskNotes.className = 'task-notes';
  
    const taskNotesTextarea = document.createElement('textarea');
    taskNotesTextarea.name = 'task-notes';
    taskNotesTextarea.className = 'task-notes';
    taskNotesTextarea.pattern = '^(?!.*\\s{2}).*$';
    taskNotesTextarea.placeholder = 'Notes (optional)';
    taskNotesTextarea.rows = 6;
    taskNotesTextarea.maxLength = 200;
    taskNotes.appendChild(taskNotesTextarea);
  
    const dueDate = document.createElement('div');
    dueDate.className = 'due-date';
  
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'due-date';
    dueDateInput.className = 'due-date';
    dueDateInput.required = true;
    dueDate.appendChild(dueDateInput);
  
    const priority = document.createElement('div');
    priority.className = 'priority';
  
    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'priority';
    prioritySelect.name = 'priority';
  
    const option1 = document.createElement('option');
    option1.value = 'Priority';
    option1.selected = true;
    option1.textContent = 'Priority';
  
    const option2 = document.createElement('option');
    option2.value = 'Not Priority';
    option2.textContent = 'Not Priority';
  
    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    priority.appendChild(prioritySelect);
  
    const location = document.createElement('div');
    location.className = 'location';
  
    const locationSelect = document.createElement('select');
    locationSelect.className = 'location';
    locationSelect.name = 'location';
  
    const optionTasks = document.createElement('option');
    optionTasks.value = 'Tasks';
    optionTasks.textContent = 'Tasks';
  
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Projects';
  
    locationSelect.appendChild(optionTasks);
    locationSelect.appendChild(optgroup);
    location.appendChild(locationSelect);
  
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
  
    const closeButton = document.createElement('button');
    closeButton.type = 'submit';
    closeButton.className = 'close';
    closeButton.formNoValidate = true;
    closeButton.textContent = 'Close';
  
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.className = 'add';
    addButton.textContent = 'Add';
  
    buttons.appendChild(closeButton);
    buttons.appendChild(addButton);
  
    form.appendChild(taskName);
    form.appendChild(taskNotes);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(location);
    form.appendChild(buttons);
  
    dialog.appendChild(form);
    dialogBox.appendChild(dialog);
  
    return dialogBox;
  }
  
  function createTaskButton(className, text) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
  
    const buttonText = document.createElement('p');
    buttonText.textContent = text;
  
    const totalTasks = document.createElement('p');
    totalTasks.className = 'total-tasks';
  
    button.appendChild(buttonText);
    button.appendChild(totalTasks);
  
    return button;
  }
  
  function createProjects() {
    const projects = document.createElement('div');
    projects.id = 'projects';
  
    const projectHeader = document.createElement('h3');
    projectHeader.className = 'project-header';
    projectHeader.textContent = 'My Projects';
    projects.appendChild(projectHeader);
  
    const projectsList = document.createElement('ul');
    projectsList.className = 'projects-list';
  
    const project = document.createElement('li');
    project.className = 'project';
  
    const projectButton = document.createElement('button');
    projectButton.className = 'project-folder';
  
    const projectName = document.createElement('p');
    projectName.className = 'project-name';
    projectName.textContent = 'Website';
  
    const projectSettings = document.createElement('span');
    projectSettings.className = 'project-settings';
  
    projectButton.appendChild(projectName);
    projectButton.appendChild(projectSettings);
    project.appendChild(projectButton);
    projectsList.appendChild(project);
    projects.appendChild(projectsList);
  
    const addProjectContainer = document.createElement('div');
    addProjectContainer.className = 'add-project-container';
  
    const newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.name = 'new-project';
    newProjectInput.placeholder = 'Project name + [Enter]';
    newProjectInput.maxLength = 20;
    newProjectInput.className = 'new-project';
    newProjectInput.pattern = '^(?!.*\s{2}).*$';
    newProjectInput.required = true;
  
    addProjectContainer.appendChild(newProjectInput);
    projects.appendChild(addProjectContainer);
  
    const addProjectButton = document.createElement('button');
    addProjectButton.type = 'button';
    addProjectButton.className = 'add-project';
    addProjectButton.textContent = 'Create a new project (+)';
  
    projects.appendChild(addProjectButton);
  
    return projects;
  }
  
  function createMain() {
    const container = document.createElement('div');
    container.className = 'container';
  
    container.appendChild(createMainHeader());
    container.appendChild(createTitleBar());
    container.appendChild(createDialogBox());
    container.appendChild(createTaskContainer());
  
    main.appendChild(container);
  
    return main;
  }
  
  function createMainHeader() {
    const mainHeader = document.createElement('div');
    mainHeader.className = 'main-header';
  
    const dockMain = document.createElement('button');
    dockMain.type = 'button';
    dockMain.className = 'dock-main';
  
    const svg = createSVG(
      'http://www.w3.org/2000/svg',
      'M212.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115v-535.382q0-29.923 21.193-51.115 21.192-21.193 51.115-21.193h535.382q29.923 0 51.115 21.193 21.193 21.192 21.193 51.115v535.382q0 29.923-21.193 51.115-21.192 21.193-51.115 21.193H212.309ZM320-200v-560H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v535.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846H320Zm59.999 0h367.692q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-535.382q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H379.999v560ZM320-200H200h120Z',
      '24',
      '24'
    );
  
    dockMain.appendChild(svg);
    mainHeader.appendChild(dockMain);
  
    return mainHeader;
  }
  
  function createTitleBar() {
    const titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
  
    const h2 = document.createElement('h2');
    h2.textContent = 'All tasks';
  
    const addTaskMain = document.createElement('button');
    addTaskMain.className = 'add-task-main';
    addTaskMain.textContent = 'Add task (+)';
  
    titleBar.appendChild(h2);
    titleBar.appendChild(addTaskMain);
  
    return titleBar;
  }
  
  function createDialogBox() {
    const dialogBox = document.createElement('div');
    dialogBox.className = 'dialog-box';
  
    const form = document.createElement('form');
    form.method = 'dialog';
    form.className = 'dialog-form';
  
    const dialogLeft = document.createElement('div');
    dialogLeft.className = 'dialog-left';
  
    const taskName = document.createElement('div');
    taskName.className = 'task-name';
  
    const taskNameInput = document.createElement('input');
    taskNameInput.name = 'task-name';
    taskNameInput.className = 'task-name';
    taskNameInput.placeholder = 'Task name (required)';
    taskNameInput.maxLength = 30;
    taskNameInput.autocomplete = 'off';
    taskNameInput.pattern = '^(?!.*\\s{2}).*$';
    taskNameInput.required = true;
    taskName.appendChild(taskNameInput);
  
    const dueDate = document.createElement('div');
    dueDate.className = 'due-date';
  
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'due-date';
    dueDateInput.className = 'due-date';
    dueDateInput.required = true;
    dueDate.appendChild(dueDateInput);
  
    const priority = document.createElement('div');
    priority.className = 'priority';
  
    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'priority';
    prioritySelect.name = 'priority';
  
    const option1 = document.createElement('option');
    option1.value = 'Priority';
    option1.selected = true;
    option1.textContent = 'Priority';
  
    const option2 = document.createElement('option');
    option2.value = 'Not Priority';
    option2.textContent = 'Not Priority';
  
    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    priority.appendChild(prioritySelect);
  
    const location = document.createElement('div');
    location.className = 'location';
  
    const locationSelect = document.createElement('select');
    locationSelect.className = 'location';
    locationSelect.name = 'location';
  
    const optionTasks = document.createElement('option');
    optionTasks.value = 'Tasks';
    optionTasks.textContent = 'Tasks';
  
    const optgroup = document.createElement('optgroup');
    optgroup.label = 'Projects';
  
    locationSelect.appendChild(optionTasks);
    locationSelect.appendChild(optgroup);
    location.appendChild(locationSelect);
  
    dialogLeft.appendChild(taskName);
    dialogLeft.appendChild(dueDate);
    dialogLeft.appendChild(priority);
    dialogLeft.appendChild(location);
  
    const dialogRight = document.createElement('div');
    dialogRight.className = 'dialog-right';
  
    const taskNotes = document.createElement('div');
    taskNotes.className = 'task-notes';
  
    const taskNotesTextarea = document.createElement('textarea');
    taskNotesTextarea.name = 'task-notes';
    taskNotesTextarea.className = 'task-notes';
    taskNotesTextarea.pattern = '^(?!.*\\s{2}).*$';
    taskNotesTextarea.placeholder = 'Notes (optional)';
    taskNotesTextarea.rows = 6;
    taskNotesTextarea.maxLength = 200;
    taskNotes.appendChild(taskNotesTextarea);
  
    const buttons = document.createElement('div');
    buttons.className = 'buttons';
  
    const closeButton = document.createElement('button');
    closeButton.type = 'submit';
    closeButton.className = 'close';
    closeButton.formNoValidate = true;
    closeButton.textContent = 'Close';
  
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.className = 'add';
    addButton.textContent = 'Add';
  
    buttons.appendChild(closeButton);
    buttons.appendChild(addButton);
  
    dialogRight.appendChild(taskNotes);
    dialogRight.appendChild(buttons);
  
    form.appendChild(dialogLeft);
    form.appendChild(dialogRight);
    dialogBox.appendChild(form);
  
    return dialogBox;
  }
  
  function createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
  
    const taskList = document.createElement('ul');
    taskList.className = 'task-list';
  
    taskContainer.appendChild(taskList);
  
    return taskContainer;
  }
  
  function createTaskItem(name, notes, date) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
  
    const taskComplete = document.createElement('div');
    taskComplete.className = 'task-complete';
  
    const checkbox = document.createElement('button');
    checkbox.type = 'button';
    checkbox.role = 'checkbox';
    checkbox.setAttribute('aria-checked', 'false');
    checkbox.name = 'delete-item';
    checkbox.title = 'Remove task';
    checkbox.className = 'delete-task';
    taskComplete.appendChild(checkbox);
  
    const taskItemData = document.createElement('div');
    taskItemData.className = 'task-item-data';
  
    const taskName = document.createElement('h3');
    taskName.className = 'task-name';
    taskName.textContent = name;
  
    const taskNotes = document.createElement('p');
    taskNotes.className = 'task-notes';
    taskNotes.textContent = notes;
  
    const metadata = document.createElement('p');
    metadata.className = 'metadata';
    metadata.textContent = date;
  
    taskItemData.appendChild(taskName);
    taskItemData.appendChild(taskNotes);
    taskItemData.appendChild(metadata);
  
    const taskOptions = document.createElement('div');
    taskOptions.className = 'task-options';
  
    const editButton = document.createElement('button');
    editButton.className = 'edit-task';
    editButton.title = 'Edit';
  
    const editSvg = createSVG(
      'http://www.w3.org/2000/svg',
      'M180.001-400v-59.999h280V-400h-280Zm0-160v-59.999h440V-560h-440Zm0-160v-59.999h440V-720h-440Zm344.615 539.999v-105.692l217.153-216.153q7.462-7.461 16.111-10.5 8.65-3.038 17.299-3.038 9.436 0 18.252 3.538 8.816 3.539 16.029 10.615l37 37.385q6.462 7.461 10 16.153 3.539 8.693 3.539 17.385 0 8.692-3.231 17.692t-10.308 16.461L630.307-180.001H524.616Zm287.691-250.307-37-37.385 37 37.385Zm-240 202.615h38l129.847-130.462-18.385-19-18.615-18.769-130.847 130.231v38Zm149.462-149.462-18.615-18.769 37 37.769-18.385-19Z',
      '22',
      '22'
    );
  
    editButton.appendChild(editSvg);
    taskOptions.appendChild(editButton);
  
    taskItem.appendChild(taskComplete);
    taskItem.appendChild(taskItemData);
    taskItem.appendChild(taskOptions);
  
    return taskItem;
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
  