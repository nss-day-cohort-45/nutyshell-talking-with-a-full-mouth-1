// Tatiane
// When the user clicks an affordance for entering a new task, a form should be presented to the user with a two fields to enter in the task name and the expected completion date

import { saveTask } from './taskProvider.js';

// -----------------------------------------------------------------

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".dialog__container")

// -----------------------------------------------------------------

export const createNewTask = () => {
  contentElement.innerHTML = `
  <form class="form">
      <fieldset class="form__fieldset">
          <div class="form__fieldset_flex">
            <div class="form__input">
              <label for="task_entry">Task Entry</label>
              <input id="text" name="task_entry" type="text></input>
            </div>
            <div class="form__input">
              <label for="task_date">Completion Date</label>
              <input id="completionDate" type="date" name="task_date"></input>
            </div>
            <div>
                <button id="saveTask" type="submit">Save Task</button>
            </div>
            <div>
            <button id="closeTask" value="close" type="submit">Close</button>
            </div>
          </div>
        </fieldset>
  </form>
  `
}

// -----------------------------------------------------------------


export const taskDialog = () => {
  createNewTask()
};

// -----------------------------------------------------------------


eventHub.addEventListener("click", e => {
  if (e.target.id === "saveTask") {

    e.preventDefault()

      // need to gather the data from the form
      const completionDate = document.querySelector("#completionDate").value
      const text = document.querySelector("#text").value



      // Make a new object representation of a note
      const newTask = {
          completionDate: completionDate,
          text: text
          
      }

      // Change API state and application state
      saveTask(newTask)
  }
})

//---------------------------------------------------------------------

eventHub.addEventListener("click", e => {
      if (e.target.id === "closeTask") {
          const theDialog = document.querySelector(".dialog__container");
          theDialog.close();
      }
  }
)