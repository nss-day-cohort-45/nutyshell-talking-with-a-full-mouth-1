//Christine

//Renders the message into HTML for rendering to the DOM
//Appends the username to the message text

import { useUsers } from "../users/userProvider.js"



export const messageHTMLRep = (messageObj, user) => {
    let currentUser = useUsers()
    const userId = sessionStorage.getItem("activeUser")

    return `
    <section class="message__author" id="message--${messageObj.id}">
        <div class="message__author" id="message__author--${userId}">
        ${currentUser.filter(user => user.id === userId).map(user => user.name)}
        </div>
        <div class="message__text" id="message__text"> 
        ${ messageObj.text}
         </div>

    </section>
    `
}

// myArray.filter(item => item.type === 'beta').map(item => item.name)

