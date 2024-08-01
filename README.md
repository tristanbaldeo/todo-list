# To-Do List Web Application

## Overview

This To-Do List web application is designed to help users manage tasks efficiently. It includes features such as task creation, categorization by projects, and prioritization. The application is built using JavaScript, Webpack, CSS, and utilizes localStorage for data persistence. It also supports mobile-friendly design with a toggleable sidebar.

Live Link: https://tristanbaldeo.github.io/todo-list

## Features
- Task Management: Create, edit, and delete tasks.
- Project Organization: Organize tasks into projects.
- Task Prioritization: Mark tasks as priority.
- Today View: View tasks due today.
- Responsive Design: Mobile-friendly with a toggleable sidebar.
- Data Persistence: Tasks and projects are saved in localStorage.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features in Detail](features-in-detail)

## Installation
1) Clone the Repository:

```bash
git clone https://github.com/tristanbaldeo/todo-list.git
cd todo-list
```

2) Install Dependencies:

Make sure you have Node.js and npm installed. Then, run:

```bash
npm install
```

3) Run the Application:

To start the development server, run:

```bash
npm start
```
The application will be available at http://localhost:8080.

4) Build for Production:

To create a production build, run:


```bash
npm run build
```

## Usage
1) Adding Tasks:
    - Click on the "Add Task (+)" button in the sidebar or main view.
    - Fill in the task details and select the appropriate project and priority.
    - Click "Add" to save the task.

2) Managing Projects:
    - Projects can be added through the "Create a new project (+)" button.
    - Projects can be deleted by clicking the delete icon next to the project name in the sidebar.

3) Navigating:
    - Use the sidebar to navigate between "All Tasks," "Priority," "Today," and specific projects.
    - The sidebar is toggleable on mobile devices.

## Technologies Used
    - JavaScript: Core language used for the application logic.
    - Webpack: Module bundler for compiling the application.
    - CSS: Styling of the application.
    - localStorage: For data persistence.

## Features in Detail
### Task Management
- Create Task: Users can create new tasks with details like name, notes, due date, priority, and project association.
- Edit/Delete Task: Tasks can be edited or deleted, with updates reflected immediately.

### Project Management
- Create Project: Users can create new projects to organize tasks.
- Delete Project: Projects can be deleted, and tasks within them are re-categorized as "All Tasks."

### Responsive Design
- The application is designed to be mobile-friendly. The sidebar is hidden by default on smaller screens and can be toggled using the #dock-main button.