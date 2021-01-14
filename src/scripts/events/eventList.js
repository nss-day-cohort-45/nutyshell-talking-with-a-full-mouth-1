/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. To create HTML represenation of events list on the DOM upon the inital page load of nutshell.js
        2. To listen if an event has been deleted and call the proper functions to delete the event object from the API
        3. To listen for changes to the events and create an updated HTML representation in the DOM
        4. To reset the form fields when an event has been saved. 
*/

import { useEvents, getEvents, deleteEvents } from "./eventProvider.js"
import { eventHTMLRep } from "./eventHTMLRep.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events")

// Event Listener to rerender the list of events when there's been a change to the events ----------------------------------------------

eventHub.addEventListener("eventStateChanged", () => {
    eventList()
})

// Used to create the HTML representation of the events list on the DOM ----------------------------------------------------------------

export const eventList = () => {
    getEvents()
        .then(() => {
        let events = useEvents()
    
        render(events)
    })
}

const render = (events) => {
    const allEventsConvertedToStrings = events.map(
        (event) => {
            return eventHTMLRep(event)
        }
    ).join("")

    contentTarget.innerHTML = allEventsConvertedToStrings
}

// Event Listener for DELETING events --------------------------------------------------------------------------------------------------

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")
        deleteEvents(entryId)
    }
})

// Event Listener to reset the form after the save button has been clicked -------------------------------------------------------------

eventHub.addEventListener("resetForm", () => {
    document.querySelector("#event__date").value = ""
    document.querySelector("#event__name").value = ""
    document.querySelector("#event__location").value = ""
    document.querySelector("#event__description").value = ""
})

