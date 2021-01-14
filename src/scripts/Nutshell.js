import { eventList } from "./events/eventList.js"
import { createNewEventButton } from "./events/eventForm.js"

export const Nutshell = () => {
    // Render all your UI components here
    console.log("Nutshell has been rendered!")
    console.log("Session storage user id: ", sessionStorage.getItem("activeUser") )

eventList();
createNewEventButton();

}
