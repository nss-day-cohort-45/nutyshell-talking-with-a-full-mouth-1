// Tatiane
// renders the tasks created into HTML for rendering to the DOM

import {createNewTask} from './taskForm.js'
// import { taskList } from './taskList.js';
import {deleteTask} from './taskProvider.js'

const eventHub = document.querySelector(".container");

export const taskHTML = (task) => {
  return `
  <div class="task">
    <input type="checkbox" id="checked" class="task" name="task" value="true">
    <p>Task: ${task.text}</p>
    <p>Completion Date: ${task.completionDate}</p>
    <button class="entry__edit margin_left">Edit</button>
    <button id="deleteTask--${task.id}" class="margin_left">Delete</button>
  </div>
  `
}

export const newTaskButton = () => {
  const contentElement = document.querySelector(".createTaskButton")
  contentElement.innerHTML = `
  <button id="createNewTask">Create New Task</button>
  `
}

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