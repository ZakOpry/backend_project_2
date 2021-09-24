const regButton = document.querySelector(".regButton");

const regUser = async () => {
    const username = document.querySelector(".username").value;
    const password = document.querySelector(".password").value;
    const password2 = document.querySelector(".password2").value;
    const email = document.querySelector(".email").value;
    const url = "http://localhost:3008/createuser";
    
    userObject = { password, username, email }

    if (password !== password2) {
        alert("Your password doesn't match. Try again.");
        return
    }
    else if (username == "") {
        alert("You must enter a username.")
        return
    }
    else if (email == "") {
        alert("You must enter an email address.")
        return
    }
    else if (password == "") {
        alert("you must enter a password.")
        return
    }
    else {
       const userData = await fetch (url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userObject),
        });
    
    }
    window.location.assign("http://localhost:3008/login");
}

regButton.addEventListener('click', () => regUser())