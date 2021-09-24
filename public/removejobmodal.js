const rmvJobButton = document.querySelector(".jobModalRemove")
const rmvJobModal = document.querySelector("#rmvjob")

const rmvJobForm = () => {
    document.getElementById("removeJobID").style.display = "block";
    console.log("opened")
}

const rmvJob = async () => {
    const jobId = document.querySelector(".rmvjobId").value;

    const url = `http://localhost:3008/jobs/${jobId}`;
    console.log(jobId)
    
    jobtoDelete = { jobId }

    if (jobId == "" ) {
        alert("You left a field empty. Try again.");
        return
    }
    else {
    const rmvJobData = await fetch (url, {
            method: "DELETE",
            mode: "cors",
            headers: {
                "Content-type" : "application/json"
            },
        
        })
    alert("You have successfully removed a job.")
    }
    document.getElementById("removeJobID").style.display = "none";
}
rmvJobModal.addEventListener('click', () => rmvJobForm())
rmvJobButton.addEventListener('click', () => rmvJob())
