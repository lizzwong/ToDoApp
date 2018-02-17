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

router.post('/add', function (request,response){
const newTask = request.body;
const sqlText = `INSERT INTO tasks(dateadded, task, status)
    VALUES($1, $2, $3)`;
pool.query(sqlText, [newTask.dateadded, newTask.task, newTask.status])
    .then(function (result) {
        console.log('Tasks added', result);
        response.send(200);
    })//end then 
    .catch(function (error) {
        console.log('Could not add tasks');
        response.sendStatus(500);
    })
})

module.exports = router;
