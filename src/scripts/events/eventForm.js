// Need to add saveEventButton here
// Need to create form for entering new events.

import { useEvents, getEvents, saveEvents } from "./eventProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events--button")
const contentElement = document.querySelector(".events__newEventForm")

export const createNewEventButton = () => {
    contentTarget.innerHTML = "<button id='createNewEventButton'>Create New Event</button>"
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "createNewEventButton")

    contentElement.showModal()
    render()
})

// To Render the form inside the dialog box
const render = () => {
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
                <input type="text" name="eventName" id="eventName" placeholder="Event Name?">>
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

// CLOSE BUTTON NOT WORKING
// To close the dialog box
eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton") {
        contentElement.close()
    }
})

// This needs to save whats been entered in the form
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "submitJournalEntry") {
        
        // Need to gather the data from the form
        let date = document.querySelector("#eventDate").value
        let name = document.querySelector("#eventName").value
        let location = parseInt(document.querySelector("#eventLocation").value)
        let description = parseInt(document.querySelector("#eventDescription").value)
        
        // Make a new object representation of a note
        const newEvent = {
            date: date,
            name: name,
            location: location,
            description: description 
        }

        // Change API state and application state
        saveEvents(newEvent)
       
        // Is this a bad idea? Is this stacking eventListeners?
        const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)
    }
})

export const eventForm = () => {
    getEvents()
    .then( () => render())
}