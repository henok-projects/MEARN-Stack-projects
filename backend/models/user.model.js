const mongoose =require('mongoose');
const schema =mongoose.Schema({
    username:{
        type: String,
        trim:true,
        require:true,
        unique:true,
        minLength: 3
    }},{
    timestamps: true,


});

const User = mongoose.model('user',schema);

module.exports =User;