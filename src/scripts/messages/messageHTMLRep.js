//Christine

//Renders the message into HTML for rendering to the DOM
//Appends the username to the message text
//Creates Delete button 
//Listens if Delete button has been clicked and commuicates with deleteMessage
//in messageProvider
import { deleteMessage } from "./messageProvider.js"

const eventHub = document.querySelector(".container");

export const messageHTMLRep = (messageObj) => {
        
    return `
    <section class="message" id="message--${messageObj.id}">
        <div class="message__author" id="message__author">
        Name: ${messageObj.user.username}
        </div>
        <div class="message__text" id="message__text"> 
        Message: ${ messageObj.text }
         </div>
         <button id="deleteMessage--${messageObj.id}" class="deleteMessage">Delete</button>

    </section>
    `
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteMessage--")) {
        const [tag, messageId] = clickEvent.target.id.split("--")

        deleteMessage(messageId)
    }
})



