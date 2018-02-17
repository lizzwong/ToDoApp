const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/',function(request,response){
const sqlText = `SELECT * FROM tasks`;
pool.query(sqlText)
    .then(function(result){
        console.log('Tasks acquired', result);
        response.send(result.rows);
    })//end then 
    .catch(function(error){
        console.log('Could not get tasks');
        response.sendStatus(500);
    })
})//end router get tasks



module.exports = router;
