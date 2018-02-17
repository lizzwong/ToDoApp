$(document).ready(onReady);

function onReady() {
    console.log('Happy New Year from JQ!');
    getAllTasks();
    $('#submitButton').on('click',function(event){
        event.preventDefault();
        emptyInputs();
        addTask();
    })//submit button

    $('.table').on('click', '.deleteButton', function () {
        console.log('Delete task');
        let taskToDelete = $(this).data('id');
        deleteTask(taskToDelete);
    })//delete button

    $('.table').on('click', '.completeButton', function () {
        console.log('In Complete task');
        let taskComplete = $(this).data('id');
        completeTask(taskComplete);
    })//complete
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

function addTask(){
console.log('in addTask');
let newTask = getNewTask();
$.ajax({
    type: 'POST',
    url: 'tasks/add',
    data: newTask
})
    .done(function (response) {
         console.log('Tasks added', response);
         getAllTasks();
    })//end Done
    .fail(function (response) {
          console.log('Could not add tasks');
    })//end Fail
}//end add new task

function deleteTask(id){
$.ajax({
    type: 'DELETE',
    url: `/tasks/delete/${id}`,
})
    .done(function(response){
        console.log('Task deleted', response);
        getAllTasks();
    })//end done
    .fail(function(){
        console.log('Task not deleted');
    })//end fail 
}//end delete task

function completeTask(id){
$.ajax({
    type: 'PUT',
    url: `/tasks/complete/${id}`,
})
    .done(function (response) {
        console.log('Task complete', response);
        getAllTasks();
    })//end done
    .fail(function () {
        console.log('Task not complete');
    })//end fail 
}

function displayTasks(bananas){
    $('#listTasks').empty();
    for( let banana of bananas ){
        $('#listTasks').append(`<tr><td>${banana.dateadded.substring(0, 10)}</td><td>${banana.task}</td>
        <td>${banana.status}</td><td><button class="completeButton" data-id=${banana.id}>Complete</button></td>
        <td><button class="deleteButton" data-id=${banana.id}>Delete</button></td></tr>`)
    }
}//end display tasks function

function getNewTask(){
    let taskToAdd = {
        dateadded : $('.date').val(),
        task : $('.taskToDo').val(),
        status : 'Incomplete'
    }
    return taskToAdd
}//end getting inputs from DOM

function emptyInputs(){
    $('.date').val(),
    $('taskToDo').val()
}