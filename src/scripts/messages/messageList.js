//Christine

//imports useMessages, getMessages, and saveMessages from provider
//imports HTMLRep
//renders messageList to the DOM
//communicates with provider when sendMessage btn is clicked

import { useMessages } from "./messageProvider.js"
import { messageHTMLRep } from "./messageHTMLRep.js"

const contentTarget = document.querySelector(".dashboard__messages")
const eventHub = document.querySelector(".container")

export const messageList = () => {
    
    let messageCardPromises = []
    let messages = useMessages()
    for (const chat of messages) {
        messageCardPromises.push(messageHTMLRep(chat))
    }
    Promise.all(messageCardPromises)
        .then(messageCards =>
            contentTarget.innerHTML += messageCards.join("")
        )
}

eventHub.addEventListener("messageStateChanged", () => {
    messageList()
    console.log("messageStateChangedListening")
})