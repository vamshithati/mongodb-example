const express= require('express')
const dotEnv= require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const employeeRoutes=require('./routes/employeeRoutes')

const app=express()
dotEnv.config()

const PORT=process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("MongoDB Connected")
})
.catch((error)=>{
    console.log("Eror",error)
})

app.use(bodyParser.json())
app.use('/employees', employeeRoutes)


app.listen(PORT, ()=> {
    console.log('server started and running at ${PORT}')

})