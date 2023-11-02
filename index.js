const express = require('express')
const  mongoose = require('mongoose')
const projectModel = require('./models/projectModel')
const cors=require('cors')
const dotenv=require('dotenv')
const resumeLink = require('./models/resumeLink')
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
const port = process.env.PORT  || 3050

app.get('/', (req, res) => {
  res.send('Portfollio Databse--Test Ok')
})


app.post('/addproject',async (req,res)=>{
    try {
        const {projectTitle,description,technonlogies, projectlink,imagelink}=req.body;
        const newProject= new projectModel({
        projectTitle:projectTitle,
        description:description,
        technonlogies:technonlogies,
        projectlink: projectlink,
        imagelink:imagelink
    })
    await newProject.save()
    res.status(201).json({message:"Project Added"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Server Error Occured"})
        
    }
    
})

app.get('/getprojects',async (req,res)=>{
    try {
        const projects=await projectModel.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({message:"Server Error Occurred"})
        
    }

})



app.get('/resumelink',async (req,res)=>{
    try {
        const link=await resumeLink.find()
        res.status(200).json(link)
    } catch (error) {
        res.status(500).json({message:"Server Error Occurred"})
        
    }

})


mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING)
.then(()=>{
    app.listen(port, () => {
        console.log(`Example app listening on port ${port} Connected To database`)
      })
})
.catch((err)=>{
    console.log(err)
})

