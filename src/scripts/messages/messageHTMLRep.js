//Christine

//Renders the message into HTML for rendering to the DOM

export const messageHTMLRep = (messageObj, users) => {
    return `
    <section class="message" id="message">
        <div class="message__author" id="message__author">
        ${ 
            users.map(user => `${ user.username }`)
        }
        </div>
        <div class="message__text" id="message__text"> 
        ${ messageObj.text}
         </div>

    </section>
    `
}

//Still need to figure out how to match user id's to find username