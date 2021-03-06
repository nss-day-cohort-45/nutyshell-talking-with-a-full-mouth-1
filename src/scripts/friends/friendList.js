/**
 * Gregory 
 * 
 * This module pulls the currentUser-friend relationships from friendProvider.js, then
 * pulls all the users from userProvider.js. 
 * 
 * The module then finds all user objects that are friends of the current User and stores
 * them in the friendsOfUser variable and renders The usernames of said friends to the DOM.
 * 
 */

import { getFriends, useFriends } from "./friendProvider.js"
import { friendHTMLRep, friendContainerHTML } from "./friendHTMLRep.js"
import { getUsers, useUsers } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends")
const currentUserId = parseInt(sessionStorage.getItem("activeUser")) 

export const friendList = () => {
    const friendHTMLContainer = friendContainerHTML()
    contentTarget.innerHTML = friendHTMLContainer
    const contentElement = document.querySelector(".friends__container")

    let userFriends = []
    // Here, we pull the user-friend relationships from the DB
    // Only friend relationships that have the currentUserId as the userId will be pulled
    
    getUsers()
        .then(getFriends)
        .then(() => {
            userFriends = useFriends()
            let allUsers = useUsers() // grab all user objects in the database
            const friendsOfUser = allUsers.filter(user => { // Compare the id of each user in allUsers
                for (const friend of userFriends) {         // to the friendId of each relationship in 
                    if (user.id === friend.friendId) {      // userFriends. If there is a user whose ID
                        return user                         // is found in userFriends, add that user object to
                    }                                       // friendsOfUser
                }
            })

            renderFriends(friendsOfUser, contentElement)
        })

}

const renderFriends = (friends, contentElement) => {
    const friendHTML = friends.map((friendObj) => { // Wrap each friend's username in HTML and join it
        return friendHTMLRep(friendObj)             // to the friendHTML variable, which is then added 
    }).join("")                                     // added to the DOM.
    contentElement.innerHTML = friendHTML

    
}

