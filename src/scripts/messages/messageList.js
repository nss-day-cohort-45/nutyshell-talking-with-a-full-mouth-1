//Christine

//imports useMessages, getMessages, and saveMessages from provider
//imports HTMLRep
//renders messageList to the DOM
//communicates with provider when sendMessage btn is clicked

import { useMessages, getMessages, saveMessage } from "./messageProvider.js"
import { messageHTMLRep } from "./messageHTMLRep.js"

const contentTarget = document.querySelector(".dashboard__messages")
const eventHub = document.querySelector(".container")

const render = (messageArray) => {
    let messageCards = []
    for (const chat of messageArray) {
        contentTarget.innerHTML = messageCards.push(messageHTMLRep(chat))
    }
    
}

export const messageList = () => {
    getMessages()
    .then(() => {
        const allMessages = useMessages()
        render(allMessages)
    })
}