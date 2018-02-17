const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const taskRouter = require('./router/taskRouter');
app.use('/tasks', taskRouter);

app.use(express.static('server/public'));

const port = 8888
app.listen(port, function(){
    console.log(`listening on port ${port}. Gong Xi Fa Cai`);
})