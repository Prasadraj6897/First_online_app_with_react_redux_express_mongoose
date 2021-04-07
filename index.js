import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from 'dotenv'

// put js must because it wont work
import PostMethod from "./router/posts.js"

// const cors = require('cors');
// const express = require('express');
let app = express();

// add dot env
dotenv.config();

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));

app.use(cors());
app.options('*', cors());
app.set('port', process.env.PORT || 5000);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//

// app.listen(app.get('port'), function() { 
//     console.log('we are listening on: ', 
//     app.get('port'))
//   });

app.get('/', (req,res)=>{
  res.send("Hello we are in heroku")
})

app.use('/posts', PostMethod);
const port = process.env.PORT || 5000;

// const CONNECTION_URL = "mongodb+srv://Prasad_Database:Prasad_Databse123@cluster0.1qfop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



// for disable warning in console  add process.env. for dot env//
mongoose.connect(process.env.CONNECTION_URL || 'mongodb://localhost:27017/ExpressTestDB2', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(port, ()=>console.log("Server running")))
    .catch((err)=>console.log(err))


mongoose.set('useFindAndModify', false)
//  for disable warning in console     //