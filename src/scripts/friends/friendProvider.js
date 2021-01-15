/**
 * Gregory Thompson
 * 
 * This module fetches the friend relationships from the database using getFriends(), then filters
 *  and stores all the friend objects that have the currentUserId listed as the userId.
 * 
 * The users friends can then be retrieved for use by other modules using useFriends()
 * 
 */
let friends = []
let userFriends = []

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

export const getFriends = () => {
    return fetch("http://localhost:8088/friends")
        .then(response => response.json())
        .then(parsedFriends => {
            friends = parsedFriends
        })
        .then(() => { 
            // Make sure that only the current user's friends are returned
            userFriends = friends.filter((friend) => {
                if (friend.userId === currentUserId) {
                    return friend
                } 
            })
        })
}

export const useFriends = () => {
    return userFriends.slice()
}