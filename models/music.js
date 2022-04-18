const mongoose = require('mongoose')

const musicShema = mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Album:{
        type:String,
        require:true
    },
    ReleaseDate:{
        type:String,
        require:true
    },
    Gener:{
        type:String,
        require:true
    },
    Downloads:{
        type:Number,
        require:true
    },
    views:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('music',musicShema)