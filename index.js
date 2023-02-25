const mongoose = require('mongoose')
const express= require('express')
const bodyParser = require('body-parser')
const User = require ('./models/user.model')
require('dotenv').config()
const {AuthRoutes,ChannelRoutes,MessageRoutes} = require('./routes/index')

const app = express()
app.use(bodyParser.json())
// app.use(express.json())
app.use(AuthRoutes,ChannelRoutes,MessageRoutes)
app.use('uploads/', express.static('uploads'))


mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", () => console.log("ERROR while connecting to DB"))  //code for connecting mongodb
db.once("open", () => {console.log("Connected to mongoDB ")
})


app.listen(8000,()=> 
console.log('Running at localhost:8000'))