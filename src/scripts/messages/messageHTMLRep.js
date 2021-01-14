//Christine

//Renders the message into HTML for rendering to the DOM
//Appends the username to the message text

import { useUsers, getUsers } from "../users/userProvider.js"

export const messageHTMLRep = (messageObj) => {
    const userId = parseInt(sessionStorage.getItem("activeUser"))
    let userObj =""
    return getUsers()
        .then(() => {
            let users = useUsers()
            userObj = users.find(user => user.id === userId)
           
    return `
    <section class="message__author" id="message--${messageObj.id}">
        <div class="message__author" id="message__author">
        ${userObj.username}
        </div>
        <div class="message__text" id="message__text"> 
        ${ messageObj.text}
         </div>

    </section>
    `
})
}



