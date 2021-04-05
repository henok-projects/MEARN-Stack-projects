const router = require('express').Router();
const { Router } = require('express');
let Exercise =require('../models/exercise.model');

//get all 
router.route('/').get((req,res)=>{
    //find() it is a mongoose method
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch(err=>res.status(400).json('error'+err))
});

//add
router.route('/add').post((req,res)=>{
 const username = req.body.username;
 const description = req.body.description;
 const duration = Number(req.body.duration);
 const date = Date.parse(req.body.date);

 const newExercise = new Exercise({username,description,duration,date});
  newExercise.save()
  .then(()=>res.json('Exercise saved successfully!'))
  .catch(err=>res.status(400).json('error'+err))
});



//get by id 
router.route('/:id').get((req,res)=>{
    //find() it is a mongoose method
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('error'+err))
});

//delete by id 
router.route('/:id').delete((req,res)=>{
    //find() it is a mongoose method
    Exercise.findByIdAndRemove(req.params.id)
    .then(()=>res.json("exercise deleted"))
    .catch(err=>res.status(400).json('error'+err))
});

//update
router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id).then(exercise =>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        exercise.save()
        .then(()=>res.json('Exercise updated successfully!'))
        .catch(err=>res.status(400).json('error'+err))
    })
    .catch(err=>res.status(400).json('error'+err))

});

module.exports =router;