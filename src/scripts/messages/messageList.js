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
    
    let messageCards = []
    let messages = useMessages()
    for (const chat of messages) {
        messageCards.push(messageHTMLRep(chat))
        contentTarget.innerHTML = messageCards.join("")
    }
   
}

eventHub.addEventListener("messageStateChanged", () => {
    messageList()
    
})

eventHub.addEventListener("clearForm", () => {
    document.querySelector("#message__input").value = ""
    
})