const express = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const {port } = require('./config/config.js');


mongoose.connect('mongodb+srv://shreyajaviya13:jk9d9d4lkZrrE5lv@cluster1.vyxeyz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
})

const app = express();

app.use('healthcheck', (req, res) => {
    res.status(200).send('Server is running');
});

app.listen(port,()=>{
    console.log(`Server ios listening on http://localhost:${port}`);
})