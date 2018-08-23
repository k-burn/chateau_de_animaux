//My Stedmens
const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;


//require routers

//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());

//app.use ROUTERS

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);  
});