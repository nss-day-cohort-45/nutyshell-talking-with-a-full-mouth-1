import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"





const eventHub = document.querySelector(".container")

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/


// Check sessionStorage for a value for activeUser using .getItem(<key>)
// Call login and register if .getItem returns null
// Add event listener to trigger nutshell when sessionStorage changes

if (sessionStorage.getItem("activeUser") === null) {
    RegisterForm()
    LoginForm()
    const hideTasksDiv = document.querySelector(".testClass")
    hideTasksDiv.classList.toggle("hidden")
    const hideEventsDiv = document.querySelector(".testClass")
    hideEventsDiv.classList.toggle("hidden")
    const hideArticlesDiv = document.querySelector(".testClass")
    hideArticlesDiv.classList.toggle("hidden")

    // LoginForm() dispatches the "userAuthenticated" custom event when
    // sessionStorage is set. 
    eventHub.addEventListener("userAuthenticated", (CustomEvent) => {
        Nutshell()
    })
} else { // If "activeUser" exists, go straight to Nutshell UI
    Nutshell()
}

