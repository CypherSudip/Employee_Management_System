const express = require('express');
const router=express.Router();
const Employee=require('./employee');
const ObjectId=require('mongoose').Types.ObjectId;
// const services=require('../services/render');
const services = require('./server/services/render');

router.get('/',services.homeRoutes);
router.get('/add-user',services.add_user);

router.get('/update-user',services.update_user);


// GET SINGLE EMPLOYEE
// router.get('/:id',(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//         Employee.findById(req.params.id,(err,doc)=>{
//             if(err){
//                 console.log('error in GET employee by id '+err);
//             }
//             else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         return res.status(400).send(`No records found with id ${req.params.id}`);
//     }
// })



// // GET API
// router.get('/', (req,res)=>{
//     Employee.find((err,doc) => {
//         if(err){
//             console.log('error in GET data '+err);
//         }
//         else{
//             res.send(doc);
//         }
//     })
// })





// // POST API
// router.post('/',(req,res)=>{
//     let emp =new Employee({
//         name: req.body.name,
//         position:req.body.position,
//         dept: req.body.dept
//     });
//     emp.save((err,doc)=>{
//         if(err){
//             console.log('error in post data '+err);
//         }
//         else{
//             res.send(doc);
//         }
//     })

// })
// // PUT API
// router.put('/:id',(req,res)=>{
    
//     if(ObjectId.isValid(req.params.id)){
//         let emp={
//             name:req.body.name,
//             position:req.body.position,
//             dept:req.body.dept,
//         }
//         Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//             if(err){
//                 console.log('error in GET employee by id '+err);
//             }
//             else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         return res.status(400).send(`No records found with id ${req.params.id}`);
//     }
// })

// // DELETE SINGLE EMPLOYEE
// router.delete('/:id',(req,res)=>{
//     if(ObjectId.isValid(req.params.id)){
//         Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
//             if(err){
//                 console.log('error in DELETE employee by id '+err);
//             }
//             else{
//                 res.send(doc);
//             }
//         })
//     }else{
//         return res.status(400).send(`No records found with id ${req.params.id}`);
//     }
// })


module.exports=router;