'use strict';
var feedback = [];

//variables
var cancelOrderFunction = document.getElementById('cancel_order_button');
var checkStatus = document.getElementById('check_order_status');
var feedbackBtn = document.getElementById('feedbackButton');
var quizBtn =  document.getElementById('Quiz');

//functions
function clearLocalStorage() {
    checkStatus.removeEventListener('click', checkStatusFunction);
    localStorage.removeItem("deliveryOrder");
    deliveryStatus.innerText = "Your Order has been Cancelled";
}

function checkStatusFunction() {
    deliveryStatus.innerText = "Your Order is On Its Way";
}
function feedbackFunction() {
    // localStorage.feedbackButton;
    feedback.push(document.getElementById('subjectId').value);
    localStorage.setItem('feedback', JSON.stringify(feedback));
}
function quizFunction(){
    document.location = 'winQuiz.html';
}

//listeners
cancelOrderFunction.addEventListener('click', clearLocalStorage);
checkStatus.addEventListener('click', checkStatusFunction);
feedbackBtn.addEventListener('click', feedbackFunction);
quizBtn.addEventListener('click', quizFunction);