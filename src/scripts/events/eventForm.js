/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. To make a "CreateNewEvent" button html representation.
        2. To make the HTML representation of the createNewEvents form and saveEvent button to be rendered in the <dialog> box.
        3. Create click event listeners on the CreateNewEventButton, saveEvents button, and the close button (on the dialog box).
        4. To gather the values entered into the form.
*/

import { useEvents, getEvents, saveEvents } from "./eventProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events--button")
const contentElement = document.querySelector(".events__newEventForm")


// To create HTML representation of the createNewEvent button on the DOM
export const createNewEventButton = () => {
    contentTarget.innerHTML = "<button id='createNewEventButton'>Create New Event</button>"
}

// Listening for click event on createNewEventButton. Will open dialog box and call function to create HTML representation of the new event form. 
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "createNewEventButton") {
        contentElement.showModal()
        createNewEvent()
    }
})

// To Render the form inside the dialog box
export const createNewEvent = () => {
    contentElement.innerHTML = `
        <div>
        <form id="newEventForm">
        <!-- Event Date -->
            <fieldset>
                <label for="eventDate">Date of Event</label>
                <input type="date" name="eventDate" id="eventDate">
            </fieldset>
        <!-- Event Name -->
            <fieldset>
                <label for="eventName">Event Name</label>
                <input type="text" name="eventName" id="eventName" placeholder="Event Name">
            </fieldset>
        <!-- Event Location -->
            <fieldset>
                <label for="eventLocation">Event Location</label>
                <textarea type="text" name="eventLocation" id="eventLocation" placeholder="Where are we going?"></textarea>
            </fieldset>
        <!-- Event Description -->
            <fieldset>
                <label for="eventDescription">Event Description</label>
                <textarea type="text" name="eventDescription" id="eventDescription" placeholder="What are we going to do?"></textarea>
            </fieldset>
        <!-- Submit button. -->
        <button type="button" id="saveEvent">Save Event</button>
        </form>
        <button id="closeButton">Close</button>
        </div>
    `
}

// To close the dialog box
contentElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton") {
        contentElement.close()
    }
})

// To save whats been entered in the form and POST it to the database
contentElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {

        clickEvent.preventDefault()

        // Need to gather the data from the form
        let date = document.querySelector("#eventDate").value
        let name = document.querySelector("#eventName").value
        let location = document.querySelector("#eventLocation").value
        let description = document.querySelector("#eventDescription").value

        // Make a new object representation of a note
        const newEvent = {
            date: date,
            name: name,
            location: location,
            description: description
        }

        // Change API state and application state
        saveEvents(newEvent)

        //  To Reset form after the saveEvent button has been clicked
        const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)
    }
})

// Old Code
// export const eventForm = () => {
//     getEvents()
//     .then( () => render())
// }