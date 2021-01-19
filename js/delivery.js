'use strict';
var feedback = [];

//variables
var cancelOrderFunction = document.getElementById('cancel_order_button');
var checkStatus = document.getElementById('check_order_status');
var feedbackBtn = document.getElementById('feedbackButton');
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

//listeners
cancelOrderFunction.addEventListener('click', clearLocalStorage);
checkStatus.addEventListener('click', checkStatusFunction);
feedbackBtn.addEventListener('click', feedbackFunction);








// document.getElementById('subjectId').value = localStorage.getItem('subjectName');
