/* 
  -Author: Tatiane
  -Purpose:
  1. To make a "CreateNewTask" button html representation.
  2. To make the HTML representation of the createNewTask form, saveTask button, and closeTask button to be rendered in the <dialog> box.
  3. Create click event listeners on the saveTask button, and the close button (on the dialog box).
  4. To gather the values entered into the form and change the API and application state.
*/  


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



      // Make a new object representation of a task
      const newTask = {
          completionDate: completionDate,
          text: text
          
      }

      // Change API state and application state
      saveTask(newTask)

      const customEvent = new CustomEvent("resetTaskForm")
      eventHub.dispatchEvent(customEvent)
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