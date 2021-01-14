// Tatiane

// renders the tasks created into HTML for rendering to the DOM

export const taskHTML = (task) => {
  return `
  <div class="task">
    <input type="checkbox" class="task" name="task" value="Task">
    <p>Task: ${task.text}</p>
    <button class="entry__edit margin_left">Edit</button>
    <button id="deleteTask--${task.id}" class="margin_left">Delete</button>
  </div>
  `
}