//Christine

//imports saveMessage and getMessage
//Renders the form and send button to the DOM with messageForm
//Handles browser-generated click event of sendMessage

import { getMessages, saveMessage } from "./messageProvider.js"

const contentTarget = document.querySelector(".dashboard__messages")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <textarea class="message__text" id="message__text" placeholder="Enter Message"></textarea>
    <button class="send__message" id="send__message">Send</button>
    `
}

export const messageForm = () => {
    getMessages()
    .then( () => render())
}

eventHub.addEventListener("click", clickEvent => {
    if
})