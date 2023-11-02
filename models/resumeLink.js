const mongoose=require('mongoose')

const linkSchema=mongoose.Schema({
    resumelink:{
        require:true,
        type:String
    }

})

module.exports=mongoose.model('link',linkSchema)