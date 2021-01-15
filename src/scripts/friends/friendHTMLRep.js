/**
 * Gregory
 * 
 * This module takes a user object as an argument, wraps the username of said user
 * in HTML, and returns the resulting string to the module that called the 
 * friendHTMLRep function.
 * 
 */
export const friendHTMLRep = (friendObj) => {
    return `
    <div class="friend__display">${friendObj.username}</div>
    `
}