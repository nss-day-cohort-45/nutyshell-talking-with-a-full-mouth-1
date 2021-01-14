

import { createNewEvent } from "./eventForm.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events--button")
const taco = document.querySelector(".events__newEventForm")

export const eventHTMLRep = (event) => {
    return `
    <div class="event" id="event.id">
        <div class="event__date">${event.date}</div>
        <div class="event__name">Name: ${event.name}</div>
        <div class="event__location">Location: ${event.location}</div>
        <div class="event__description">Description: ${event.description}</div>
        <button class="button" id="showWeather--${event.id}">Show Weather</button>
        <button class="button" id="deleteEvent--${event.id}">Delete</button> 
    </div>
    `
}

// export const createNewEventButton = () => {
//     contentTarget.innerHTML = "<button id='createNewEventButton'>Create New Event</button>"
// }

// eventHub.addEventListener("click", (clickEvent) => {
//     if (clickEvent.target.id === "createNewEventButton")

//     taco.showModal()
//     createNewEvent()
// })