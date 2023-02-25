const express = require('express')
const routes = express.Router()
const channelController =  require('../controllers/channel.controller')
const validator = require('../middleware/validator')
const Authentication =  require('../middleware/auth_jwt')


routes.post('/Lets_chat/v1/channel',[ Authentication.verifyToken, validator.validateChannel], channelController.createChannel)

module.exports = {ChannelRoutes : routes}