const logInButton = document.querySelector(".logInButton");
const link = document.querySelector("a")

const logInUser = async () => {
    const username = document.querySelector(".username").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const URL = "http://localhost:3008/login/user"

    const userData = {
        username,
        email,
        password
    };
    
    const loginUserData = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData),
    })
    console.log(loginUserData)

}




logInButton.addEventListener("click", () => {logInUser()})
