/*
    - Author: Kate Hinrichs
    - Purpose of Module: 
        1. To listen for showWeather to be clicked and then open up a dialog box with a message.
*/

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".dashboard__weather--dialog")

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id.startsWith("showWeather--")) {
     
        contentElement.showModal()
        
        contentElement.innerHTML = `
            <div>
                Cloudy with a chance of meatballs.
            </div>
            <button id="closeButton">Close</button>
        `
    }
})

contentElement.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "closeButton") {
        contentElement.close()
    }
})