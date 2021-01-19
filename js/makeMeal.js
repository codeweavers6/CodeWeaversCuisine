'use strict';
// This JS is for the Make your own meal page.
// Variables

var arrayOfCustomerMeal = [];
var addIngredient = document.getElementById("addIngredientId");
var submitIngredient = document.getElementById("Main-dish");
// var cancelOrder= document.getElementById('cancel_order_button');

var counter = 3;


// Constractor
function CustomerMeal(name, ingredient, chiken, meat, fried, grilled, steamed) {
    this.mealName = name;
    this.mealIngredient = ingredient;
    this.isChicken = chiken;
    this.isMeat = meat;
    this.isFried = fried;
    this.isGrilled = grilled;
    this.isSteamed = steamed;
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
    parentelement.appendChild(input);
    console.log(parentelement);
    counter++;

    //    var newIngredient= event.target.extraIngredient.value;
    //    CustomerMeal.mealIngredient.push(newIngredient);
    //    console.log(  CustomerMeal.mealIngredient);
}

// Listener function for submiting the form
function submitIngrenientFunction(event) {
    event.preventDefault();
    var arrayofIngredients = [];
    while (counter > 0) {
        var mealNew = event.target.mealNameName.value;

        var firstIngredientNew = event.target.firstIngredientName.value;
        var secondIngredientNew = event.target.secondIngredientName.value;
        var test = document.getElementsByClassName("textf");


        arrayofIngredients = [firstIngredientNew, secondIngredientNew];
        if (test.length > 3) {
            //var newIngredient = event.target.extraIngredient.value;
            for (let index = 3; index < test.length; index++) {
                arrayofIngredients.push(test[index].value);

            }

            console.log(arrayofIngredients);
        }
        // arrayofIngredients.push(newIngredient);

        counter--;
    }
    var addingMeal = new CustomerMeal(mealNew, arrayofIngredients, true, true, true, true, true);
    console.log(addingMeal);
    localStorage.setItem("deliveryOrder", JSON.stringify(addingMeal));
    storeData();
    document.location = 'delivery.html';

}
//function to cancel the order
// function cancelOrderFunction(){
//     localStorage.clear();
// }



// //function to create a report for the customer of the order
//make a dely
// function ingredientsReport() {
//     var parentelement = document.getElementById('printReport');
//     var header = document.createElement('h2');
//     header.textContent = 'You Ordered: ';
//     parentelement.appendChild(header);
//     var par = document.createElement('p');
//     par.textContent = "`Your have chose ${ addingMeal.mealName} `";
//     parentelement.appendChild(par);
// }
// ingredientsReport();

//listener
//listner to add more ingredients
addIngredient.addEventListener('click', addIngredientFunction);
// listner to submit the form
submitIngredient.addEventListener('submit', submitIngrenientFunction);
// console.log(submitIngredient);
//listner to cancel the order
// cancelOrder.addEventListener('click', cancelOrderFunction);
