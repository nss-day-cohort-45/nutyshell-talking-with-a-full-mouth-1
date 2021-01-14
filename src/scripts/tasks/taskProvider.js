// Tatiane
// grabs saved tasks from the api so that they can be rendered to the DOM in taskList

const eventHub = document.querySelector(".container");

// ---------------------------------------------------------------

let tasks = []

export const useTasks = () => {
  return tasks.slice()
}

export const getTasks = () => {
return fetch("http://localhost:8088/tasks") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedTasks => {
      tasks = parsedTasks
        // What should happen when we finally have the array?
    })
}

// ---------------------------------------------------------------

const dispatchStateChangeEvent = () => {
  const taskStateChangedEvent = new CustomEvent("taskStateChanged")

  eventHub.dispatchEvent(taskStateChangedEvent)
};

// ---------------------------------------------------------------

export const saveTask = task => {
  return fetch("http://localhost:8088/tasks", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
  })
  .then(dispatchStateChangeEvent)
};

// ---------------------------------------------------------------

export const deleteTask = taskId => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "DELETE"
  })
      .then(dispatchStateChangeEvent)
};
