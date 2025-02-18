const Employee = require('../models/employee')
const createEmployee=async(req, res)=>{
    try{
        const{ name, email, phone, city}=req.body
        const employee=new Employee({
            name, email, phone, city
        })
        await employee.save()
        res.status(201).json(employee)
    }
    catch{
        console.log("error: ", error)
        res.status(500).json({message:'server-error'})
    }
}

module.exports={createEmployee}