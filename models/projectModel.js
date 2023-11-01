const mongoose=require('mongoose')

const projectSchema=mongoose.Schema({
    projectTitle:{
        require:true,
        type:String
    },
    description:{
        require:true,
        type:String
    },
    technonlogies:{
        require:true,
        type:String
    },
    projectlink:{
        require:true,
        type:String
    },
    imagelink:{
        require:true,
        type:String
    },

})

module.exports=mongoose.model('data',projectSchema)