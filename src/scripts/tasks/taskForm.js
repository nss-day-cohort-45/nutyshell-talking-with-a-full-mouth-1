// Tatiane
// When the user clicks an affordance for entering a new task, a form should be presented to the user with a two fields to enter in the task name and the expected completion date

// -----------------------------------------------------------------

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".task--form")

// -----------------------------------------------------------------

const renderForm = () => {
  contentElement.innerHTML = `
  <form class="form">
      <fieldset class="form__fieldset">
          <div class="form__fieldset_flex">
            <div class="form__input">
              <label for="task_entry">Task Entry</label>
              <input class="text" name="task_entry" type="text></input>
            </div>
            <div class="form__input">
              <label for="task_date">Completion Date</label>
              <input class="completionDate" type="date" name="task_date"></input>
            </div>
            <div>
                <button id="saveTaskStateChanged" type="submit">Save Task</button>
            </div>
          </div>
        </fieldset>
  </form>
  `
}

// -----------------------------------------------------------------

const renderButton = () => {
  const contentElement = document.querySelector(".task--form--button--container")
  contentElement.innerHTML = `
  <button id="task--form--button">Create New Task</button>
  `
}

// -----------------------------------------------------------------

export const taskForm = () => {
    renderButton()
}

// -----------------------------------------------------------------

contentElement.addEventListener("click", e => {
  if (e.target.id.startsWith("task--form--button")) {
      const openDialogBox = new CustomEvent("taskBtnClicked");
      eventHub.dispatchEvent(openDialogBox);
  };
});

// -----------------------------------------------------------------

eventHub.addEventListener("click", e => {
  if (e.target.id === "saveTaskStateChanged") {

    e.preventDefault()

      // need to gather the data from the form
      const completionDate = document.querySelector(".completionDate").value
      const text = document.querySelector(".text").value



      // Make a new object representation of a note
      const newTask = {
          completionDate: completionDate,
          text: text,
          // timestamp: Date.now()
      }

      // Change API state and application state
      saveTask(newTask)
  }
})


// // ---------------------------------------------------------------

eventHub.addEventListener("taskBtnClicked" , e => {
  const theDialog = document.querySelector(".form");
  theDialog.showModal();
  renderForm()
});

// // --------------------------------------------------------------

eventHub.addEventListener("click", e => {
      if (e.target.id === "dialog--close") {
          const theDialog = document.querySelector(".form");
          theDialog.close();
      }
  }
)