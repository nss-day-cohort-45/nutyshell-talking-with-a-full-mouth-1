//Christine

//1. messageProvider interacts with the api to save new and fetch all chat messages,
//via useMessage, getMessage, and saveMessage

//2. it communicates with messageList to update chat feed on the DOM

const eventHub = document.querySelector(".container")
let messages = []

export const useMessages = () => messages.slice()

export const getMessages = () => {
    return fetch("http://localhost:8088/messages?_expand=user")
        .then(response => response.json())
        .then(apiMessages => {
            messages = apiMessages
        })
}

export const saveMessage = message => {
    return fetch("http://localhost:8088/messages?_expand=user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}

const dispatchStateChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("messageStateChanged")
    eventHub.dispatchEvent(messageStateChangedEvent)
}

export const deleteMessage = messageId => {
    return fetch(`http://localhost8088/messages/?_expand=user/${messageId}`, {
        method: "DELETE"
    })
    .then(getMessages)
    .then(dispatchStateChangeEvent)
}