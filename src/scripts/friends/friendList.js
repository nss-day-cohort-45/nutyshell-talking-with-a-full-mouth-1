import { getFriends, useFriends } from "./friendProvider.js"
import { friendHTMLRep } from "./friendHTMLRep.js"


export const friendList = () => {
    const eventHub = document.querySelector(".container")
    const contentTarget = document.querySelector(".friend__container")
    const currentUserId = parseInt(sessionStorage.getItem("activeUser")) 
    // The userId was stored when the user logged in. All Nutshell components will use this value.

    const userFriends = []
    // Here, we pull the user-friend relationships from the DB
    // Only friend relationships that have the currentUserId as the userId will be pulled
    getFriends() 
        .then(() => {
            userFriends = useFriends()
            renderFriends(userFriends)
        })

}

const renderFriends = (friends) => {
    // const friendHTML = friends.map((friendObj) => {
    //     return friendHTMLRep(friendObj)
    // }).join("")

    // contentTarget.innerHTML += friendHTML

    console.log("Friend Objects for the current user: ", userFriends)
}

