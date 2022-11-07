//setup environment
require('dotenv').config();

//connect database
require('./config/db');

//import models
const News = require('./models/news')
const User = require('./models/user')
const Drive = require('./models/drive')

//import express
const express = require('express');

const { PORT } = process.env;
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to micindia.org")
})

//GET https://micindia.org/users
app.get('/users', async (req, res) => {
    try{
        const data = await User.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

//GET https://micindia.org/drives
app.get('/drives', async (req, res) => {
    try{
        const data = await Drive.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

//GET https://micindia.org/micnews
app.get('/micnews', async (req, res) => {
    try{
        const data = await News.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));