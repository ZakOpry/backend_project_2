const updateWeldButton = document.querySelector(".weldModalupdate")
const updateweldModal = document.querySelector("#updateweld")

const updateweldForm = () => {
    document.getElementById("updateWeldID").style.display = "block";
}

const updateWeld = async () => {
    const weldId = document.querySelector(".updateweldId").value;
    const partNumber1 = document.querySelector(".updatepartNumber1").value;
    const partNumber2 = document.querySelector(".updatepartNumber2").value;

    const url = `http://localhost:3008/updateWeld/${weldId}`;    
    weldObject = { partNumber1, partNumber2 }

    const weldData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(weldObject),
    })
    document.getElementById("weldModal").style.display = "none";
    alert("You have successfully updated a weld.")
}

updateweldModal.addEventListener('click', () => updateweldForm())
updateWeldButton.addEventListener('click', () => updateWeld())