const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const employeeRoutes= require('./routes/employeeRoutes')

const app = express()
const PORT = process.env.PORT || 5501

dotEnv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB Connected");
    }) 
    .catch ((error)=> {
        console.error('${error}');
    })

    app.use(bodyParser.json())
    app.use('/employees', employeeRoutes)

app.listen(PORT, () => {
    console.log(`Server started and running at ${PORT}`);
});