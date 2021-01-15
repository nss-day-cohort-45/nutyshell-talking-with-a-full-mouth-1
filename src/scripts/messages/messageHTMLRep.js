//Christine

//Renders the message into HTML for rendering to the DOM
//Appends the username to the message text


export const messageHTMLRep = (messageObj) => {
    // const userId = parseInt(sessionStorage.getItem("activeUser"))
    // let userObj =""
    // return getUsers()
    //     .then(() => {
    //         let users = useUsers()
    //         userObj = users.find(user => user.id === userId)
           
    return `
    <section class="message" id="message--${messageObj.id}">
        <div class="message__author" id="message__author">
        Name: ${messageObj.user.username}
        </div>
        <div class="message__text" id="message__text"> 
        Message: ${ messageObj.text }
         </div>

    </section>
    `
}



