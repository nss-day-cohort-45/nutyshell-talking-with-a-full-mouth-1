//Christine

//Renders the message into HTML for rendering to the DOM

export const messageHTMLRep = (messageObj, users) => {
    return `
    <section class="message" id="message">
        <div class="message__author" id="message__author">${ messageObj.}
        </div>
        <div class="message__text" id="message__text"> 
        ${ 
            users.map(user => `${ user.username }`)
         }
         </div>

    </section>
    `
}