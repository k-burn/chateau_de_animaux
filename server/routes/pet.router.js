const express= require('express');
const router= express.Router();
var pool= require('../modules/pool.js');

router.get('/', (req, res)=>{
    console.log('in GET');
    const query ='SELECT * FROM "pets";';
    pool.query(query).then((results) =>{
        console.log(results);
        res.send(results.rows);
    }).catch((error)=>{
        console.log('Error making GET request');
        res.sendStatus(500);
    }); //end GET  
});

router.post('/', (req, res) => {
    console.log('POST /pets', req.body);
    const pet=req.body;
    const queryText = `INSERT INTO "pets" ("name", "type", "breed", "fun_fact", "Mendl", "notes", "owner_name", "color", "image", "checked_in") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`;
    pool.query(queryText, [pet.name, pet.type, pet.breed, pet.funFact, pet.Mendl, pet.notes, pet.owner, pet.color, pet.pic, false])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) =>{
            console.log('error making pet inser query', error);
            res.sendStatus(500);    
        });
});

router.delete('/:id', (req, res)=>{
    const idOfPetToDelete= req.params.id;
    const queryText= 'DELETE FROM "pets" WHERE "id" = $1;';
    pool.query(queryText, [idOfPetToDelete]).then((result)=>{
        res.sendStatus(200);
    }).catch((error)=> {
        console.log('Error in DELETE, BBHMM', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res)=>{
    const idOfPetToCheckIn = req.params.id;
    let queryText = `UPDATE "pets" 
                    SET "checked_in" = NOT "checked_in" WHERE "id" =$1;`;
    pool.query(queryText, [idOfPetToCheckIn]).then( (result) => {
                                res.sendStatus(201);
                            }).catch((error)=>{
                                res.sendStatus(500);
                            });
});



module.exports = router;