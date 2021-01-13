//Christine

//Renders the message into HTML for rendering to the DOM

export const messageHTMLRep = (messageObj, users) => {
    const userId = sessionStorage.getItem("activeUser")
    return `
    <section class="message--${users.username}" id="message">
        <div class="message__author" id="message__author">
        
        </div>
        <div class="message__text" id="message__text"> 
        ${ messageObj.text}
         </div>

    </section>
    `
}

//Still need to figure out how to match user id's to find username