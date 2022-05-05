const mongoose  = require('mongoose')

const userSchema = new mongoose.Schema({
    
    username:{type:String},
    password:{type:String},
    dateNas: {type:String},
    dateCad:  {type:String},
    nameF: {type:String},
    matricula: {type:String}

},{
    collection:'User'
})

module.exports = mongoose.model('userInfo', userSchema)