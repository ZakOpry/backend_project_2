const updatejobButton = document.querySelector(".jobModalupdate")
const updatejobModal = document.querySelector("#updatejob")

const updatejobForm = () => {
    document.getElementById("updateJobID").style.display = "block";
}

const updatejob = async () => {
    const jobNumber = document.querySelector(".updatejobnumber").value;
    const estimate = document.querySelector(".updatejobestimate").value;
    const expected = document.querySelector(".updatejobexpected").value;

    const url = `http://localhost:3008/updateJob/${jobNumber}`;
    
    jobObject = { jobNumber, expected, estimate }

    const jobData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(jobObject),
    })
    document.getElementById("updateJobID").style.display = "none";
    alert("You have successfully updated a job.")
}

updatejobModal.addEventListener('click', () => updatejobForm())
updatejobButton.addEventListener('click', () => updatejob())