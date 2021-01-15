/*
  -Author: Tatiane
  -Purpose: 
  1. Renders the tasks created into HTML for rendering to the DOM
  2. Renders the "Create new task" button into HTML for rendering to the DOM
  3. Click Event on the "Create new task" button which pops up a <dialog> box with a form -- form HTML in another module
  4. To listen if a task has been deleted and call the proper functions to delete the task object from the API
*/

import {createNewTask} from './taskForm.js'
import {deleteTask, checkTaskAsComplete} from './taskProvider.js'

const eventHub = document.querySelector(".container");

export const taskHTML = (task) => {
  return `
  <div id="taskBox" class="task">
    <input type="checkbox" id="checked--${task.id}" class="task" name="task" value="true">
    <div>Task: ${task.text}</div>
    <div>Completion Date: ${task.completionDate}</div>
    <button id="deleteTask--${task.id}" class="margin_left">Delete</button>
  </div>
  `
};

// -----------------------------------------------------------------

export const newTaskButton = () => {
  const contentElement = document.querySelector(".createTaskButton")
  contentElement.innerHTML = `
  <button id="createNewTask">Create New Task</button>
  `
};

// -----------------------------------------------------------------


eventHub.addEventListener("click", clickEvent => {
  const contentElement = document.querySelector(".dialog__container")
  if (clickEvent.target.id === "createNewTask") {
      contentElement.showModal()
      createNewTask()
  }
});

// -----------------------------------------------------------------

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteTask--")) {
      const [prefix, taskId] = clickEvent.target.id.split("--")

     deleteTask(taskId)
  }
}); 

// -----------------------------------------------------------------

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("checked--")) {
    const [prefix, taskId] = clickEvent.target.id.split("--")
    checkTaskAsComplete(taskId)
  }
});