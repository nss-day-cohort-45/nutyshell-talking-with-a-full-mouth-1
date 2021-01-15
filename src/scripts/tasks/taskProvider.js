/* 
  -Author: Tatiane
  -Purpose: 
  1. GET, POST, DELETE tasks to API
  2. Dispatch a custom event to eventHub when the state has changed
  3. Have a useTasks() function that places a .slice() of the raw article data into an array 
*/

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
      .then(getTasks)
      .then(dispatchStateChangeEvent)
};

// ---------------------------------------------------------------

export const checkTaskAsComplete = (taskId) => {
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({complete: true})
  })
  .then(dispatchStateChangeEvent)
}
