
const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    channelName:{
        type:String,
    
    },
    channelUsers:{

        type:[],
        required:true,
        addedOn: { type: Date,immutable: true,default:() => Date.now(),}
    },
    message:{
        type:[],
        addedOn: { type: Date,immutable: true,default:() => Date.now(),}
    }
        

});

module.exports = mongoose.model("channel",channelSchema);