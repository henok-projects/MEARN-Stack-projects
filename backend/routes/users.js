const router = require('express').Router();
const { Router } = require('express');
let User =require('../models/user.model');

//get home page
router.route('/').get((req,res)=>{
    //find() it is a mongoose method
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('error'+err))
});

//add
router.route('/add').post((req,res)=>{

 const username = req.body.username;
 const newUser = new User({username});
  newUser.save()
  .then(users=>res.json('User added successfully!'))
  .catch(err=>res.status(400).json('error'+err))

});

module.exports =router;