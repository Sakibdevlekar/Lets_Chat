const express = require('express')
const routes = express.Router()
const authController = require('../controllers/auth.controller')
const validator = require('../middleware/validator')

routes.post('/Lets_chat/v1/signUp',[validator.validateUser],authController.signUp)
routes.post('/Lets_chat/v1/signIn', authController.signIn)

module.exports = {AuthRoutes : routes}