/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. Create a function to make the HTML representation of an individual event entry to be shown on the DOM
*/

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