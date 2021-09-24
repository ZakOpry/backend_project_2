const express = require('express')
const bcrypt = require('bcrypt')
const es6Renderer = require('express-es6-template-engine')
const app = express()
const cors = require("cors")
const path = require("path")
const Sequelize = require('sequelize')
const { User, Job, Weld } = require('./models');
const { nextTick } = require('process')
const PORT = 3008

app.engine('html', es6Renderer)
app.set('views', 'templates')
app.set('view engine', 'html')
app.use(express.json())
app.use(cors())
app.use("/public", express.static(path.join(__dirname, "public")))

//to get all users
app.get('/users', async (req, res) => {
    const users = await User.findAll()
    res.render("home", {
        locals:
        {
            users:users
        },
        partials : {
            head: '/partials/head'
        },
        })
});


//to get user by id
// app.get('/user/:id', async (req, res) => {
//     const oneUser = await User.findByPk(req.params.id)
//     res.render("home", {locals:
//         {oneUser}})
//     })



//to get all users and jobs associated with users
app.get('/users/jobs', async (req, res) => {
    const users = await User.findAll({
        include: [{
            model: Job
        },
    ]
    })
    res.render("home", {locals:
        {users}})
    })
    
app.get("/home", async (req, res) => {
    res.render("home")
})
//to search by user and get associated jobs
app.get('/user/jobs/welds', async (req, res) => {

    const userJobs = await Job.findAll({
        where: {
            userId : 1
        }
    })
    const welds = await Weld.findAll({
        where: {

        }
    })
    const allInfo = []
    allInfo.push(userJobs)
    allInfo.push(welds)
    res.send(allInfo)
})

//to get all jobs and users associated with jobs
app.get('/jobs', async (req, res) => {
    const jobs = await Job.findAll({
        include: [{
            model: User
        }]
    })
    res.render("home", {locals:
    {jobs}})
})


//to get all jobs and associated welds
app.get('/jobs/welds/:jobId/', async (req, res) => {
    const welds = await Weld.findAll({
        where: {
            jobId: req.params.jobId
        }
    })
    res.render("welds", 
    {
        locals:{
            welds: welds
    },
    partials: {
        head: '/partials/head'
    }
})
})

//to search by job and get job and weld info
app.get('/job/welds/:job_number', async (req, res) => {
    
    const jobWelds = await Job.findAll({
        where: {
            job_number: req.params.job_number
        },
        include: [{
            model: Weld
        }]
        
    })
    res.render("home", {locals:
    {jobWelds}})
    })
    


//to get welds and jobs associated with welds
app.get('/welds', async (req, res) => {
    const welds = await Weld.findAll({
        include: [{
            model: Job
            
        }]
    })
    res.render("home", {locals:
    {welds}})
})

//register page
app.get('/register', async(req, res) => {
    res.render('register')
})


//to create a new user
app.post('/createuser', async (req, res) => {
const { email, username, password } = req.body;
const userPasword = password
const salt = await bcrypt.genSalt();
const hashedPassword = await bcrypt.hash(userPasword, salt)
const newUser = await User.create({
    username,
    email,
    password: hashedPassword
})
res.redirect("/login")
})


//log in page
app.get('/login', async(req, res) => {
    res.render("login")
})



//to log in as a user
app.post('/login/user', async(req, res) => {
const username = req.body.username
const email = req.body.email
const password = req.body.password

const user = await User.findOne({

    where: {
        username: username,
        
    }

})

const userData = user.dataValues
const id = user.dataValues.id

const validated = await bcrypt.compare(password, userData.password)

if (validated) {
    res.redirect(`http://localhost:3008/user/17`)
} else {
    res.redirect("error")
}

})

//to create a new job
app.post('/createJob', async (req, res) => {
    const {  job_number, purchase_order, name, userId, estimate, expected_complete} = req.body
    const newJob = await Job.create({
        
        job_number,
        purchase_order,
        name,
        userId,
        estimate,
        expected_complete
        
    })
    res.send({
        Job: newJob.job_number
    })
})


//to create a new weld for a job
app.post('/createWeld', async (req, res) => {
    const { weldId, partNumber1, partNumber2, jobId } = req.body
    const newWeld = await Weld.create({
        weldId,
        partNumber1,
        partNumber2,
        jobId
    })
    res.send(newWeld)
})

//to update an existing user
app.post('/updateUser/:id', async (req, res) => {
    const { id } = req.params;

    const updatedUser = await User.update(req.body, {
        where: {
            id
        }
    })
    res.send(updatedUser)
})


//to update an existing job
app.post('/updateJob/:job_number', async (req, res) => {
    const { job_number } = req.params;
    
    const updateJob = await Job.update(req.body, {
        where: {
            job_number
        }
        
    })
    res.send(updateJob)
    
})

//to update an existing weld
app.post('/updateWeld/:id', async (req, res) => {
    const {id} = req.params;
    const updatedWeld = await Weld.update(req.body, {
        where: {
            id
        }
    })
    res.send(updatedWeld)
})

//to delete a user
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.destroy({
        where: {
            id
        }
    })
    res.send("User Deleted")
})

//to delete a job
app.delete('/jobs/:id', async (req, res) => {
    const { id } = req.params;
    const deletedJob = await Job.destroy({
        where: {
            id
        }
    })
    res.send("Job Deleted")
})

//to delete a weld
app.delete('/welds/:id', async (req, res) => {
    const { id } = req.params;
    const deletedWeld = await Weld.destroy({
        where: {
            id
        }
    })
    res.send("Deleted Weld")
})



app.listen(PORT, console.log(`listening on ${PORT}`))