const mongoose = require('mongoose')
const playlistSchema = new mongoose.Schema({
   
    name:{
        type:String,
        require:true
    },
    music:{
        type:[String],
        require:false
    },
    genere:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }


})
module.exports = mongoose.model("playlist",playlistSchema)