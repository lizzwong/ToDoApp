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

function displayTasks(bananas){
    $('#listTasks').empty();
    for( let banana of bananas){
        $('#listTasks').append(`<tr><td>${banana.dateadded.substring(0, 10)}</td><td>${banana.task}</td>
        <td>${banana.status}</td><td><button class="markCompleteButton" data-id=${banana.id}>Complete</button></td>
        <td><button class="deleteButton" data-id=${banana.id}>Delete</button></td></tr>`)
    }
}//end display tasks function

function getNewTask(){
    let taskToAdd = {
        date : $('#date').val(),
        task : $('.taskToDo').val(),
        status : 'Incomplete'
    }
    let newTask = taskToAdd
}//end getting inputs from DOM