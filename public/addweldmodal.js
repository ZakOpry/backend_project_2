const addWeldButton = document.querySelector(".weldModalAdd")
const weldModal = document.querySelector("#addweld")

const weldForm = () => {
    document.getElementById("weldModal").style.display = "block";
    console.log("opened")
}

const addWeld = async () => {
    const weldId = document.querySelector(".weldId").value;
    const partNumber1 = document.querySelector(".partNumber1").value;
    const partNumber2 = document.querySelector(".partNumber2").value;
    const jobId = document.querySelector(".jobId").value;

    const url = "http://localhost:3008/createWeld";
    console.log(weldId)
    
    weldObject = { weldId, partNumber1, partNumber2, 
        jobId }

    if (weldId == "" || partNumber1 == "" || partNumber2 == "" || jobId == "") {
        alert("You left a field empty. Try again.");
        return
    }
    else {
       const weldData = await fetch (url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(weldObject),
        });
    alert("You have successfully added a weld.")
    }
    document.getElementById("weldModal").style.display = "none";
}
weldModal.addEventListener('click', () => weldForm())
addWeldButton.addEventListener('click', () => addWeld())