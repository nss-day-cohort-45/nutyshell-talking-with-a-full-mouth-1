/**
 * Gregory 
 * 
 * This module pulls the currentUser:friend relationships from friendProvider.js, then
 * pulls all the users from userProvider.js. 
 * 
 * The module then finds all user objects that are friends of the current User and stores
 * them in the friendsOfUser variable and renders The usernames of said friends to the DOM.
 * 
 */

import { getFriends, useFriends } from "./friendProvider.js"
import { friendHTMLRep } from "./friendHTMLRep.js"
import { getUsers, useUsers } from "../users/userProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend__container")
const currentUserId = parseInt(sessionStorage.getItem("activeUser")) 

export const friendList = () => {
    // The userId was stored when the user logged in. All Nutshell components will use this value.

    let userFriends = []
    // Here, we pull the user-friend relationships from the DB
    // Only friend relationships that have the currentUserId as the userId will be pulled
    getFriends() 
        .then(() => {
            userFriends = useFriends() // an array of objects
            //renderFriends(userFriends)
        })
    
    getUsers()
        .then(() => {
            let allUsers = useUsers()
            console.log("all users: ", allUsers)
            const friendsOfUser = allUsers.filter(user => {
                for (const friend of userFriends) {
                    if (user.id === friend.friendId) {
                        return user
                    }
                }
            })

            renderFriends(friendsOfUser)
        })

}

const renderFriends = (friends) => {
    const friendHTML = friends.map((friendObj) => {
        return friendHTMLRep(friendObj)
    }).join("")

    console.log("Friend HTML: ", friendHTML)

    contentTarget.innerHTML = friendHTML

    
}

