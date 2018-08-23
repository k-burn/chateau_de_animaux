//My Stedmens
const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;


//require routers
const petRouter=require('./routes/pet.router');
//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());

//app.use ROUTERS
app.use('/pets', petRouter);

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);  
});