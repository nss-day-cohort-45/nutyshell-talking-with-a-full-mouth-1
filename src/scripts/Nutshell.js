import { friendList } from "./friends/friendList.js"

export const Nutshell = () => {
    // Render all your UI components here
    console.log("Nutshell has been rendered!")
    console.log("Session storage user id: ", sessionStorage.getItem("activeUser") )

    friendList()
}