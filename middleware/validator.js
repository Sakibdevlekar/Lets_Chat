
const validateUser = (req,res,next)=>{
    const userObj={
    name: req.body.name,
    email: req.body.email,
    password:req.body.password
    }
    if (!userObj.name  ||!userObj.email || !userObj.password){
        return res.status(403).send({
            message: "All fields are require"
        })
    }
    else{
        next();
}
}

const validateChannel = (req,res,next)=>{
    channelUsers = req.body.channelUsers;
    console.log(">>>..body",req.body.Id)
    const channelObj = {
        channelName : req.body.channelName,
        channelUsers : req.body.channelUsers,     //creating channel with users
        userID:channelUsers.userID,
        name:channelUsers.name,
        email:channelUsers.email
    }
    if (!channelObj.channelName ){
        return res.status(403).send({
            message: "channelName is require"
        })
    }
    else if (!channelObj.channelUsers ){
        return res.status(403).send({
            message: " channelUsers are require"
        })
    }
    else if (!channelObj.channelName || !channelObj.channelUsers  ){
        return res.status(403).send({
            message: "All fields are require"
        })
    }
    else{
        next();
}
}

const validateAddMessage = (req,res,next)=>{
    
    if (!req.params.channelID ){
        return res.status(403).send({
            message: "channelID is  require please select proper channel for chat"
        })
    }
    else{
        next();
}
}



module.exports = {
    validateUser : validateUser,
    validateChannel :validateChannel,
    validateAddMessage : validateAddMessage
}