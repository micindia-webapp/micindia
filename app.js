//setup environment
require('dotenv').config();

//connect database
require('./config/db');

//import models
const News = require('./models/news')
const User = require('./models/user')
const Drive = require('./models/drive')

//import others
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser')

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json({extended:false}))
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    res.send("Welcome to micindia.org")
})

//POST https://micindia.org/register
app.post('/register', async (req, res) => {
    try{
        const {firstname, lastname, email, password, dob, location} = req.body;

        if(!(firstname && lastname && email && password && dob && location)){
            res.status(401).send("Fill all required details")
        }

        if(!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email))){
            res.status(401).send("Invalid email address")
        }

        let user = await User.findOne({email})

        if(user){
            res.status(401).send("User alerady exists")
        }

        const encrptPassword = await bcrypt.hash(password, 10);

        user = await User.create({
            firstname,
            lastname,
            email,
            encrptPassword,
            dob,
            location
        })
        
        const token = jwt.sign({
            id: user._id, email
        }, 'shhhhh', {expiresIn: '2h'})
        
        user.token = token
        await user.save();
        user.password = "*******";
        
        res.status(201).json(user)
    }catch(error){
        console.log(error);  
    }    
})

//GET https://micindia.org/login
app.get("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        
        if(!(email && password)){
            res.status(401).send("Fill all required details")
        }

        if(!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email))){
            res.status(401).send("Invalid email address")
        }

        let user = await User.findOne({email});

        if(!user){
            res.status(401).send("User does not exits")
        }
        
        if(!(await bcrypt.compare(password, user.password))){
            res.status(401).send("Email or password is incorrect")
        }

        const token = jwt.sign({
            id: user._id, email
        }, 'shhhhh', {expiresIn: '2h'})

        user.token = token;
        await user.save();
        user.password = undefined;
        
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }

        res.status(200).cookie("token", token, options)
    }catch(error){
        console.log(error);
    }
})

//GET https://micindia.org/users
app.get('/users', async (req, res) => {
    try{
        const data = await User.find();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
    }
})

//GET https://micindia.org/drives
app.get('/drives', async (req, res) => {
    try{
        const data = await Drive.find();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
    }
})

//GET https://micindia.org/micnews
app.get('/micnews', async (req, res) => {
    try{
        const data = await News.find();
        res.status(200).send(data);
    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));