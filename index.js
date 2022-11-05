import app from './app.js';
import mongoose from 'mongoose';
import connectDB from './connect/db.js';
import News from './models/news.js';
import User from './models/user.js';
import Drive from './models/drive.js';

connectDB();

app.get('/', (req, res) => {
    res.send("Welcome to micindia.org")
})

app.get('/micnews', async (req, res) => {
    try{
        const data = await News.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

app.get('/users', async (req, res) => {
    try{
        const data = await User.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})

app.get('/drives', async (req, res) => {
    try{
        const data = await Drive.find();
        res.send(data);
    }catch(err){
        console.log(err);
    }
})