//Christine

//Renders the message into HTML for rendering to the DOM
//Appends the username to the message text

import { useUsers } from "../users/userProvider.js"

let currentUser = useUsers()

export const messageHTMLRep = (messageObj, currentUser) => {
    

    return `
    <section class="message--${currentUser.username}" id="message">
        <div class="message__author" id="message__author">
        
        </div>
        <div class="message__text" id="message__text"> 
        ${ messageObj.text}
         </div>

    </section>
    `
}

