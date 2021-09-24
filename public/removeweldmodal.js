const rmvWeldButton = document.querySelector(".weldModalRemove")
const rmvWeldModal = document.querySelector("#rmvweld")

const rmvweldForm = () => {
    document.getElementById("removeWeldID").style.display = "block";
    console.log("opened")
}

const rmvweld = async () => {
    const weldId = document.querySelector(".rmvweldId").value;

    const url = `http://localhost:3008/welds/${weldId}`;
    console.log(weldId)
    
    weldtoDelete = { weldId }

    if (weldId == "" ) {
        alert("You left a field empty. Try again.");
        return
    }
    else {
    const rmvWeldData = await fetch (url, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type" : "application/json"
            },
        
        })
    alert("You have successfully removed a weld.")
    }
    document.getElementById("weldModal").style.display = "none";
}
rmvWeldModal.addEventListener('click', () => rmvweldForm())
rmvWeldButton.addEventListener('click', () => rmvweld())
