const express = require('express');

const mongoose = require('mongoose')
mongoose.connect('mongodb://bunny_thop:unlock321@ds163330.mlab.com:63330/bunny_rest',{});
//database error handling
const connection = mongoose.connection;
connection.on('open',()=>{
	console.log(" database connected")
})
connection.on('error',()=>{
	console.log("error in connecting to database")
})

const app = express()
const Routes = require('./routes');

const port = 3000

app.use('/',Routes )

app.listen(port, (err)=>{
  console.log("server running on port "+ port);
})
