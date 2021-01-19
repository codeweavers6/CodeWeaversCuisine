'use strict';
// This JS is for the Make your own meal page.
// Variables

var arrayOfCustomerMeal = [];
var addIngredient = document.getElementById("addIngredientId");
var submitIngredient = document.getElementById("Main-dish");
// var cancelOrder= document.getElementById('cancel_order_button');
var printReportForm = document.getElementById('printReport')
var cancelOrderButton = document.getElementById('btn-cancelConfirm');
var confirmOrderButton = document.getElementById('btn-reportConfirm');
var reportDiv = document.getElementById('reportDiv');
var counter = 3;


// Constractor
function CustomerMeal(name, ingredient) {
    this.mealName = name;
    this.mealIngredient = ingredient;
    arrayOfCustomerMeal.push(this);
}

//Function
//A storage function
function storeData() {
    localStorage.setItem('Main-dish', JSON.stringify(arrayOfCustomerMeal));
    //console.log(localStorage);
}
// function clearLocalStorage() {
//     localStorage.clear();
// }
function checkAndRestore() {
    if (localStorage.length > 0) { // check if the local storage has any values in it
        arrayOfCustomerMeal = JSON.parse(localStorage.getItem('Main-dish')); // restore the data from the local storage
    }
}
//Listner function to add more ingredients
function addIngredientFunction(event) {
    event.preventDefault();
    var parentelement = document.getElementById('addmoreIngreds');
    var label = document.createElement('label');
    label.textContent = 'More Ingredients';
    label.setAttribute("for", "extraIngredient");
    parentelement.appendChild(label);
    var input = document.createElement('input');
    input.setAttribute("class", "textf");
    input.setAttribute("type", "text");
    input.setAttribute("name", "extraIngredient")
    input.setAttribute('class', 'input-item')
    parentelement.appendChild(input);
    console.log(parentelement);

    counter++;


    //    var newIngredient= event.target.extraIngredient.value;
    //    CustomerMeal.mealIngredient.push(newIngredient);
    //    console.log(  CustomerMeal.mealIngredient);
}

function submitIngrenientFunction(event) {
    var inputListFromHtml = document.getElementsByClassName('input-item')
    event.preventDefault();
    var arrayofIngredients = [];
    var mealNew = event.target.mealNameName.value;

    for (var i = 0; i < inputListFromHtml.length; i++) {
        arrayofIngredients.push(inputListFromHtml[i].value)
    }

    var addingMeal = new CustomerMeal(mealNew, arrayofIngredients);
    localStorage.setItem("deliveryOrder", JSON.stringify(addingMeal));

    ingredientsReport(addingMeal)
    if (addingMeal.name !== undefined || addingMeal.name !== '') {
        ingredientsReport(addingMeal)
        printReportForm.style.display = 'block';
    }
}

// //function to create a report for the customer of the order
//make a dely
function ingredientsReport(addingMeal) {
    console.log(addingMeal)
    storeData();
    reportDiv.innerHTML = '';
    var header = document.createElement('h2');
    header.textContent = `Meal Name: ${addingMeal.mealName}`;
    reportDiv.appendChild(header);
    for (var i = 0; i < addingMeal.mealIngredient.length; i++) {
        var par = document.createElement('p');
        par.setAttribute('required', 'required')
        par.textContent = `Ingredient ${addingMeal.mealIngredient[i]}`;
        reportDiv.appendChild(par);
    }
}

function displayReport() {
    document.location = 'delivery.html';
}
function cancelReport() {
    printReportForm.style.display = 'none';
}
//listener

addIngredient.addEventListener('click', addIngredientFunction); //listner to add more ingredients
// listner to submit the form
submitIngredient.addEventListener('submit', submitIngrenientFunction);
cancelOrderButton.addEventListener('click', cancelReport)
confirmOrderButton.addEventListener('click', displayReport)
