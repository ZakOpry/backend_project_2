const viewJobs = async () => {
    const url = "http://localhost:3008/user/jobs/welds";

    const jobData = await fetch (url, {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
    })
    const jobJson = jobData.json();

    console.log(jobJson)
}

viewJobs();