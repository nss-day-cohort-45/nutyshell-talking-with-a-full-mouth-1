// Tatiane
// grabs saved tasks from the api so that they can be rendered to the DOM in taskList

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
