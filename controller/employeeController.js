const Employee = require('../models/Employee')
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

const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.error("Error:", error)
        res.status(500).json({message: 'server error'})
    }
}

const singleEmployee=async (req, res)=> {
    try{
        const employee= await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({message: "Id not found"})
        }
        res.status(200).json(employee)
    }
    catch(error){
        console.error("Error:", error)
        res.status(500).json({message: 'server error'})
    }
}

const updateEmployee= async (req, res)=> {
    try{
        const{name, email, phone, city}=req.body
        const myEmployee= await Employee.findByIdAndUpdate(req.params.id, {name, email, phone, city})
        if(!myEmployee){
            return res.status(404).json({message: "Id not found"})
        }
        res.status(200).json(myEmployee)
    }
    catch(error){
        console.error("update Error:", error)
        res.status(500).json({message: 'server error'})
    }
}
module.exports={createEmployee, getEmployees, singleEmployee, updateEmployee}