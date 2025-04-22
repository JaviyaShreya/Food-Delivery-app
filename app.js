const express = require('express');
const {port } = require('./config/config');
const {connectDB} = require('./config/db.js');


const app = express();

connectDB()
app.use('healthcheck', (req, res) => {
    res.status(200).send('Server is running');
});

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`);
})