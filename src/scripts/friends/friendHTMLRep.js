/**
 * Gregory
 * 
 * This module returns HTML representing the Friends component to the DOM when
 * friendContainerHTML is called.
 * 
 * The friendHTMLRep function takes a user object as an argument, wraps the username of said user
 * in HTML, and returns the resulting string to the module that called the 
 * friendHTMLRep function.
 * 
 */
export const friendHTMLRep = (friendObj) => {
    return `
    <div class="friend__display">${friendObj.username}</div>
    `
}

export const friendContainerHTML = () => {
    return `
    <div class="friends__header">
        <h3>Friends</h3>
    </div>
    <div class="friends__container"></div>
    <button class="friends__add--button">Add Friends</button>
    <dialog class="friends__form"></dialog>
    `
}