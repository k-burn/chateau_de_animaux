//My Stedmens
const express = require('express');
const app= express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;


//require routers
const petRouter=require('./routes/pet.router');
const guestRouter=require('./routes/guest.router');
const clientRouter=require('./routes/client.router');
const ownerRouter=require('./routes/owner.router');
const checkRouter=require('./routes/check.router');
//uses
app.use(express.static('server/public'));
app.use(bodyParser.json());

//app.use ROUTERS
app.use('/pets', petRouter);
app.use('/guests', guestRouter);
app.use('/clients', clientRouter);
app.use('/owners', ownerRouter);
app.use('/checks', checkRouter);

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);  
});