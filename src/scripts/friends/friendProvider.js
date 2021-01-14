/**
 * Gregory Thompson
 * 
 * This module fetches the friend relationships from the database using getFriends(), then filters
 *  and stores all the friend objects that have the currentUserId listed as the userId.
 * 
 * The users friends can then be retrieved for use by other modules using useFriends()
 * 
 */
let userFriends = []

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))

export const getFriends = () => {
    let friends = []
    return fetch('http://localhost:8088/friends')
        .then(response => response.json())
        .then(parsedFriends => {
            friends = parsedFriends
        })
        .then((friends) => { 
            // Make sure that only the current user's friends are returned
            userFriends = friends.map((friend) => {
                if (friend.userId === currentUserId) {
                    return friend
                } 
            })
        })
}

export const useFriends = () => {
    return userFriends.slice()
}