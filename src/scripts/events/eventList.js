import { useEvents, getEvents, deleteEvents } from "./eventProvider.js"
import { eventHTMLRep } from "./eventHTMLRep.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".dashboard__events")

eventHub.addEventListener("eventStateChanged", () => {
    eventList()
})

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

// New Event Listener for DELETING events
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEvent--")) {
        const [prefix, entryId] = clickEvent.target.id.split("--")

        deleteEvents(entryId)
    }
})

// To reset form after the save button has been clicked
eventHub.addEventListener("resetForm", () => {
    document.querySelector("#eventDate").value = ""
    document.querySelector("#eventName").value = ""
    document.querySelector("#eventLocation").value = ""
    document.querySelector("#eventDescription").value = ""
    })

// New Event Listen for FILTERING entries by mood
// eventHub.addEventListener("moodChosen", event => {
//     if (event.target.moodThatWasChosen !== "0") {

//         const moods = useMoods()
//         const mood = moods.find((mood) => mood.id === parseInt(event.detail.moodThatWasChosen))
      
//         const entries = useJournalEntries()
//         const matchingEntries = entries.filter( (entry) => entry.moodId === mood.id)

//         render(matchingEntries, moods)
//     }
// })

