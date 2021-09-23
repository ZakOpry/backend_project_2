const regButton = document.querySelector(".regButton");

const regUser = async () => {
    const username = document.querySelector(".username").value
    const password = document.querySelector(".password").value
    const email = document.querySelector(".email").value
    const url = "http://localhost:3008/createuser";
    
    userObject = { password, username, email };

    const userData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userObject),
    })
}

regButton.addEventListener('click', () => regUser())