// Tatiane
// renders the list of saved tasks onto the DOM

import {useTasks, getTasks} from './taskProvider.js'
import {taskHTML} from './taskHTMLRep.js'

const contentElement = document.querySelector(".task__container")

const render = (taskArray) => {
  const allTasksConvertedToStrings = taskArray.map(
      // convert the notes objects to HTML with NoteHTMLConverter
      (task) => {
          return taskHTML(task)
      }).join("")

  contentElement.innerHTML = allTasksConvertedToStrings
}

export const taskList = () => {
  getTasks()
      .then(() => {
          const allTasks = useTasks()
          render(allTasks)
      })
}

