//Christine

//imports saveMessage and getMessage
//Renders the form and send button to the DOM with messageForm
//Handles browser-generated click event of sendMessage

import { getMessages, saveMessage } from "./messageProvider.js"
import { useUsers } from "../users/userProvider.js"

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
    if (clickEvent.target.id === "send__message") {
        const text = document.querySelector("#message__text").value
        const userId = sessionStorage.getItem("activeUser")
        let currentUser = useUsers()
        let username = currentUser.find(user => user.id === userId).map(user => user.username)

        const newMessage = {
            user: userId,
            username: username,
            text: text
        }
        saveMessage(newMessage)
    }
})
// myArray.filter(item => item.type === 'beta').map(item => item.name)
