const addJobButton = document.querySelector(".closeform")
const openModal = document.querySelector("#addjob")

const openForm = () => {
    document.getElementById("modalForm").style.display = "block";
    console.log("opened")
}

const addJob = async () => {
    const name = document.querySelector(".jobname").value;
    const job_number = document.querySelector(".jobnumber").value;
    const purchase_order = document.querySelector(".jobpurchase").value;
    const userId = document.querySelector(".jobuserId").value;
    const estimate = document.querySelector(".jobestimate").value;
    const expected_complete = document.querySelector(".jobexpected").value;
    const url = "http://localhost:3008/createJob";
    console.log(name)
    
    jobObject = { name, job_number, purchase_order, 
        userId, estimate, expected_complete }

    if (name == "" || job_number == "" || purchase_order == "" || userId == "" ||
    estimate == "" || expected_complete == "") {
        alert("You left a field empty. Try again.");
        return
    }
    else {
       const jobData = await fetch (url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(jobObject),
        });
    alert("You have successfully added a job.")
    }
    document.getElementById("modalForm").style.display = "none";
}
openModal.addEventListener('click', () => openForm())
addJobButton.addEventListener('click', () => addJob())