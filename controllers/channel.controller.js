const User =  require('../models/user.model')
const ChannelModel = require('../models/channel.model')


exports.createChannel =async(req,res)=>{
    channelUsers = req.body.channelUsers;
    console.log(">>>..body",req.body)
    const channelObj = {
        channelName : req.body.channelName,
        channelUsers : req.body.channelUsers,     //creating channel with users
        userID:channelUsers.userID,
        name:channelUsers.name,
        email:channelUsers.email
    }
    console.log(">>>>>>>>>",channelUsers)
    try {
    const channel = await ChannelModel.insertMany(channelObj)
    res.status(201).send(channel);

} catch (err) {
    console.log("Something went wrong while saving to DB", err.message);
        res.status(500).send({message: "Some internal error while inserting the element"})
    }

}
