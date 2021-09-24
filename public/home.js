const jobsContainer = document.querySelector(".jobs")

const viewJobs = async () => {
    const url = "http://localhost:3008/user/jobs/welds";

    const jobData = await fetch (url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
    })
    const jobJson = await jobData.json();

    console.log(jobJson)

    for (const job of jobJson[0]) {
    const accordion = document.createElement("div");
    const accordionButton = document.createElement("button");
    accordionButton.className = "collapsible"
    accordionButton.innerHTML = `${job.id} ${job.name} ${job.job_number}`
    accordion.append(accordionButton)
    for (const weld of jobJson[1]) {
        const welds = document.createElement("p");
        if (weld.jobId === job.id) {
            welds.innerHTML = ` ${weld.id} ${weld.partNumber1} & ${weld.partNumber2} w/ code: ${weld.weldId}`
        }
        accordion.append(welds)
    }
    
    jobsContainer.append(accordion)
    };

};


viewJobs();