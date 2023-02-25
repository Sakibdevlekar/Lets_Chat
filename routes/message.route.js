const express = require('express')
const routes = express.Router()
//const messageController =  require('../controllers/message.controller')
const validator = require('../middleware/validator')
const Authentication =  require('../middleware/auth_jwt')
const upload = require ('../middleware/upload')


//routes.put('/Chat_App/api/v1/message/:channelID',[Authentication.verifyToken,validator.validateAddMessage,upload.single('message',)],messageController.sendMessage)
//routes.put('/Chat_App/api/v1/message/:channelID',[Authentication.verifyToken, upload.single('message') ],messageController.sendFiles)


module.exports = {MessageRoutes : routes}