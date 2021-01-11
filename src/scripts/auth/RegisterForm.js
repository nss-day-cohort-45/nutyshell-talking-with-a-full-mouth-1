const contentTarget = document.querySelector(".auth--register")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = ""
})


eventHub.addEventListener("click", e => {
    if (e.target.id === "register--button") {
        const email = document.querySelector("#register--email").value

        if (email !== "") {
            // Does the user exist?
            fetch(`http://localhost:8088/users?email=${email}`)
            .then(response => response.json())
            .then(users => {
                if (users.length === 0) {
                    fetch("http://localhost:8088/users", {
                        "method": "POST",
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            "email": email
                        })
                    })
                        .then(response => response.json())
                        .then((newUser) => {
                            sessionStorage.setItem("activeUser", newUser.id)

                            eventHub.dispatchEvent(new CustomEvent("userAuthenticated"))
                        })

                }
                else {
                    window.alert("Email already exists!  😭")
                }
            })
        }
    }
})


const render = () => {
    contentTarget.innerHTML += `
        <section class="register">
            <input id="register--email" type="text" placeholder="Enter your email address">

            <button id="register--button">Register</button>
        </section>
    `
}

export const RegisterForm = () => {
    render()
}
