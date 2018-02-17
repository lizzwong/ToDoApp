$(document).ready(onReady);

function onReady() {
    console.log('Happy New Year from JQ!');
    getAllTasks();
}

function getAllTasks(){
console.log('in getAllTasks');
$.ajax({
    type: 'GET',
    url: '/tasks',
})
    .done(function(response){
        console.log('Tasks acquired', response );
        displayTasks(response);
    })//end Done
    .fail(function(response){
        console.log('Could not get tasks');
    })//end Fail
}//end get tasks

function displayTasks(){
    
}

function getNewTask(){
    let taskToAdd = {
        date : $('#date').val(),
        task : $('.taskToDo').val(),
        completed : 'No'
    }
    let newTask = taskToAdd
}//getting inputs from DOM