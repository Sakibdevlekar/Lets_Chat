const ChannelModel = require('../models/channel.model')



exports.sendMessage = async(req,res)=>{
    const channelID = req.params.channelID 
    const msg = req.body.message
    //console.log(">>>>>>>>",test)

    const saveChannel = await ChannelModel.findOne({_id:channelID})
    if (!saveChannel){
        return res.status(404).send({message:"Channel doesn't exists"})
    }
    
    
    try {
        if (saveChannel){
            if(req.file){
                //const mMsg =  req.file
                const msg =[req.body, req.file]
                    
                
                // console.log(">>>>>>>",">>>>>>......>",msg)
                saveChannel.message.push(msg)
                // saveChannel.message.push(mMsg)
            await saveChannel.save()
            }else{
                saveChannel.message.push(msg)
                await saveChannel.save()
            }
            
        }
        
        res.status(201).send(saveChannel);
    
    } catch (err) {
        console.log("Something went wrong while saving to DB", err.message);
            res.status(500).send({message: "Some internal error while inserting the element"})
        }
    }

