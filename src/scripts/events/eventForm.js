/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. To make a "CreateNewEvent" button html representation.
        2. To make the HTML representation of the createNewEvents form and saveEvent button to be rendered in the <dialog> box.
        3. Create click event listeners on the CreateNewEventButton, saveEvents button, and the close button (on the dialog box).
        4. To gather the values entered into the form and change the API and application state.
*/

import { saveEvents } from "./eventProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events--button")
const contentElement = document.querySelector(".events__newEventForm")


// To create HTML representation of the createNewEvent button on the DOM ---------------------------------------------------------------

export const createNewEventButton = () => {
    contentTarget.innerHTML = "<button id='createNewEventButton'>New Event</button>"
}

// Listening for click event on createNewEventButton. Will open dialog box and call function to create HTML representation of the new event form. 

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "createNewEventButton") {
        contentElement.showModal()
        createNewEvent()
    }
})

// To Render the form inside the dialog box --------------------------------------------------------------------------------------------

export const createNewEvent = () => {
    contentElement.innerHTML = `
        <div>
                <form id="event__form">
            <!-- Event Date -->
                        <fieldset>
                            <label for="event__date">Date of Event</label>
                            <input type="date" name="event__date" id="event__date">
                        </fieldset>
            <!-- Event Name -->
                        <fieldset>
                            <label for="event__name">Event Name</label>
                            <input type="text" name="event__name" id="event__name" placeholder="Event Name">
                        </fieldset>
            <!-- Event Location -->
                        <fieldset>
                            <label for="event__location">Event Location</label>
                            <textarea type="text" name="event__location" id="event__location" placeholder="Where are we going?"></textarea>
                        </fieldset>
            <!-- Event Description -->
                        <fieldset>
                            <label for="event__description">Event Description</label>
                            <textarea type="text" name="event__description" id="event__description" placeholder="What are we going to do?"></textarea>
                        </fieldset>
            <!-- Submit button. -->
                    <button type="button" id="saveEvent">Save Event</button>
                </form>
            <button id="closeButton">Close</button>
        </div>
    `
}

// To close the dialog box ------------------------------------------------------------------------------------------------------------

contentElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton") {
        contentElement.close()
    }
})

// To save whats been entered in the form and POST it to the database ------------------------------------------------------------------

contentElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEvent") {
        clickEvent.preventDefault()
        let date = document.querySelector("#event__date").value
        let name = document.querySelector("#event__name").value
        let location = document.querySelector("#event__location").value
        let description = document.querySelector("#event__description").value

            const newEvent = {
                date: date,
                name: name,
                location: location,
                description: description
            }
        
            saveEvents(newEvent)

        //  To Reset form after the saveEvent button has been clicked
        const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)
    }
})