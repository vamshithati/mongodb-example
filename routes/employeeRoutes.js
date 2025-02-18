const express=require('express')
const router=express.Router()
const employeeController=require('../controller/employeeController')
const employee=require('../models/employee')

router.post('/add-emp', employeeController.createEmployee)




module.exports=router