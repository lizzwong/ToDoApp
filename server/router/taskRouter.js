const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');
const bodyParser = require('body-parser');

router.get('/',function(request,response){
const sqlText = `SELECT * FROM tasks ORDER BY status DESC`;
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

router.delete('/delete/:id', function(request,response){
const id = request.params.id;
const sqlText = `DELETE FROM tasks WHERE id=$1`;
pool.query(sqlText, [id])
    .then(function(result){
        console.log('Task deleted', result);
        response.sendStatus(200);
    })
    .catch(function(error){
        console.log('Task not delted');
        response.sendStatus(500);
    })
})

router.put('/complete/:id', function(request,response){
const id = request.params.id;
const sqlText = `UPDATE tasks SET status='Complete' WHERE id=$1`;
pool.query(sqlText, [id])
    .then(function (result) {
        console.log('Task complete', result);
        response.sendStatus(200);
    })
    .catch(function (error) {
        console.log('Task not complete');
        response.sendStatus(500);
    })
})

module.exports = router;
