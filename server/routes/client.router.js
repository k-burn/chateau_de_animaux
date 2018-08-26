const express= require('express');
const router= express.Router();
var pool= require('../modules/pool.js');

router.get('/', (req, res)=>{
    console.log('in GET');
    const query ='SELECT * FROM "owners";';
    pool.query(query).then((results) =>{
        console.log(results);
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error making GET request');
        res.sendStatus(500);
    }); //end GET  
});

router.post('/', (req, res) => {
    console.log('POST /clients', req.body);
    const client=req.body;
    const queryText = `INSERT INTO "owners" ("name", "phone", "email", "emergency_name", "emergency_phone") VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [client.name, client.phone, client.email, client.emergency_name, client.emergency_phone])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log('error making pet insert query', error);
            res.sendStatus(500);    
        });
});



module.exports = router;