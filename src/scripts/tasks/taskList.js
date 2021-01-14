/* 
    -Author: Tatiane
    -Purpose:  
    1. To create HTML represenation of tasks list on the DOM upon the inital page load of nutshell.js
    2. To listen for changes to the tasks and create an updated HTML representation in the DOM
    3. To reset the form fields when a task has been saved. 
 */

import {useTasks, getTasks} from './taskProvider.js'
import {taskHTML} from './taskHTMLRep.js'

// -----------------------------------------------------------------

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".task__container")

// -----------------------------------------------------------------

eventHub.addEventListener("taskStateChanged", () => {
    taskList()
})

// -----------------------------------------------------------------

const render = (taskArray) => {
  const allTasksConvertedToStrings = taskArray.map(
      // convert the tasks objects to HTML with taskHTML
      (task) => {
          return taskHTML(task)
      }).join("")

  contentElement.innerHTML = allTasksConvertedToStrings
}

// -----------------------------------------------------------------

export const taskList = () => {
  getTasks()
      .then(() => {
          const allTasks = useTasks()
          render(allTasks)
      })
}

// -----------------------------------------------------------------

eventHub.addEventListener("resetTaskForm", () => {
    document.querySelector("#completionDate").value = ""
    document.querySelector("#text").value = ""
})


