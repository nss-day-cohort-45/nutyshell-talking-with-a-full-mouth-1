import { getFriends, useFriends } from "./friendProvider.js"
import { friendHTMLRep } from "./friendHTMLRep.js"

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
            userFriends = useFriends()
            renderFriends(userFriends)
        })

}

const renderFriends = (friends) => {
    const friendHTML = friends.map((friendObj) => {
        return friendHTMLRep(friendObj)
    }).join("")

    console.log("Friend HTML: ", friendHTML)

    contentTarget.innerHTML = friendHTML

    
}

