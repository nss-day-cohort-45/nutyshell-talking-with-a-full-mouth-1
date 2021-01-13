const eventHub = document.querySelector(".container")

let events = []


export const useEvents = () => {
    const sortedByDate = events.sort(
        (currentEvent, nextEvent) =>
            Date.parse(currentEvent.date) - Date.parse(nextEvent.date)
    )
    return sortedByDate
}

// export const useJournalEntries = () => journal.slice()

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("eventStateChanged"))
}

export const getEvents = () => {
    return fetch("http://localhost:8088/events") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEvents => {
            // What should happen when we finally have the array?
            events = parsedEvents
        })
}

export const saveEvents = event => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(event)
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

// Method to DELETE entries
export const deleteEvents = eventId => {
    return fetch(`http://localhost:8088/events/${eventId}`, {
        method: "DELETE"
    })
        .then(getEvents)
        .then(dispatchStateChangeEvent)
}

    // You export a function that provides a version of the
    // // raw data in the format that you want