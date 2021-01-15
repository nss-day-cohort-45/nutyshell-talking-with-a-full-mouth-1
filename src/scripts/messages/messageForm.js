//Christine

//imports saveMessage, getMessage, useUsers, getUsers
//Renders the form and send button to the DOM with messageForm
//Handles browser-generated click event of sendMessage

import { getMessages, saveMessage } from "./messageProvider.js"
import { useUsers, getUsers } from "../users/userProvider.js"

const contentTarget = document.querySelector(".dashboard__messages--form")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <form class="message__form">
    <fieldset class="message__fieldset" id = "message__fieldset">

    <textarea rows="5" cols="50" name="message__input" class="message__input" id="message__input" placeholder="Enter Message"></textarea>
    
    <button type="button" class="send__message" id="send__message">Send</button>
    </fieldset>
    </form>
    `
}

export const messageForm = () => {
    return getMessages()
        .then(() => render())
        
}

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "send__message") {
        clickEvent.preventDefault()
        const text = document.querySelector("#message__input").value
        const userId = parseInt(sessionStorage.getItem("activeUser"))
        
        let userObj = ""
        getUsers()
            .then(() => {
                let users = useUsers()
                userObj = users.find(user => user.id === userId)
                const newMessage = {
                    userId: userId,
                    text: text
                }
                saveMessage(newMessage)
            })
            const resetEvent = new CustomEvent("clearForm")
            eventHub.dispatchEvent(resetEvent)
    }
})


 