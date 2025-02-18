const express=require('express')
const router=express.Router()
const employeeController=require('../controller/employeeController')
const Employee= require('../models/Employee')


router.post('/add-emp', employeeController.createEmployee)

router.get('/allemployees', employeeController.getEmployees)


module.exports=router