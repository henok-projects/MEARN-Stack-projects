const mongoose =require('mongoose');
var schema =mongoose.Schema({
    username:{type: String,require:true}, 
    description:{type: String,require:true}, 
    duration:{type: Number,require:true}, 
    date:{type: Date,require:true},  
    },{
    timestamps: true,
});

const Exercise = mongoose.model('exersise',schema);

module.exports =Exercise;