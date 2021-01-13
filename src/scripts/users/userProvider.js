//Christine

//userProvider interacts with the api to save new and fetch all
//registered users of Nutshell

let users = []

export const useUsers = () => users.slice()

export const getUsers = () => {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(apiUsers => {
        users = apiUsers
    })
}