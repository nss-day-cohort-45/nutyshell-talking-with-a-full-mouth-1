/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. GET, POST, and DELETE events to API
        2. Create copy of the events information that can be used throughout the modules
        3. Dispatch an event when the events have been changed
*/

const eventHub = document.querySelector(".container")

// Dispatch event when an event has been added, deleted, or edited  --------------------------------------------------------------------
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("eventStateChanged"))
}

// -------------------------------------------------------------------------------------------------------------------------------------

let events = []

export const useEvents = () => {
    const sortedByDate = events.sort(
        (currentEvent, nextEvent) =>
            Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
    )
    return sortedByDate
}
// -------------------------------------------------------------------------------------------------------------------------------------

export const getEvents = () => {
    return fetch("http://localhost:8088/events") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEvents => {
            // What should happen when we finally have the array?
            events = parsedEvents
        })
}

// -------------------------------------------------------------------------------------------------------------------------------------

export const saveEvents = event => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

// -------------------------------------------------------------------------------------------------------------------------------------

export const deleteEvents = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

