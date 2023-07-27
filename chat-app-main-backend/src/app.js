const express = require("express");
const morgan = require('morgan') // hppt request logger middleware for node.js
const ratelimit = require('express-rate-limit')
const helmet = require("helmet")
const mongosanitize = require('express-mongo-sanitize')
const bodyParser = require('body-parser')
const xss = require("xss") // sanitize untrusted html
const cors = require("cors") // allow cross origin request

const app = express()

app.use(express.urlencoded({
  extended: true
}))

app.use(mongosanitize());

// app.use(xss())

app.use(cors({
  origin: "*",
  methods: ['GET' ,'PATCH', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}))

//
app.use(express.json({limit : '10kb'}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(helmet());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan("dev"))
}

const limiter = ratelimit({
  max: 3000,
  windowMs: 60 * 60 * 1000, // 1 hour 
  message: "Too many requests from this IP, please try again in an hour"
})

app.use("/tawk",limiter)


module.exports = app;