const mongoose = require('mongoose')


const channelSchema = mongoose.Schema({
    channelUsers:[
        {
        _id:{type:String,default:""},
        name:{type:String,required: true},
        email:{ type: String, default: "" },
    },
],


    message:[
        {
        senderEmail:{type: String, default:""},
        message:{type: String, default:""},
        addedOn: { type: Date,immutable: true,default:() => Date.now(),}
        },
    ],

    addedOn: { type: Date,immutable: true, default: Date.now()}
});


channelSchema.method({
    saveData: async function () {
        return this.save();
    },
});
channelSchema.static({
    findData: function (findObj) {
        return this.find(findObj);
    },
    findOneData: function (findObj) {
        return this.findOne(findObj);
    },
    findOneAndUpdateData: function (findObj, updateObj) {
        return this.findOneAndUpdate(findObj, updateObj, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
        });
    },
});

module.exports = mongoose.model("Channel",channelSchema)