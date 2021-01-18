'use strict';
// This JS is for the Make your own meal page.
// Variables

var arrayOfCustomerMeal = [];
var addIngredient = document.getElementById("addIngredientId");
var submitIngredient = document.getElementById("submit-order");

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

    // while (counter > 0) {
    //     var mealNew = event.target.mealNameName.value;

    //     var firstIngredientNew = event.target.firstIngredientName.value;
    //     var secondIngredientNew = event.target.secondIngredientName.value;
    //     var newIngredient = event.target.extraIngredient.value;

    //     var arrayofIngredients = [firstIngredientNew, secondIngredientNew];

    //     arrayofIngredients.push(newIngredient);
    //     counter--;
    // }
    // var addingLocation = new CustomerMeal(mealNew, arrayofIngredients, true, ture, true, true, true);
    // console.log(addIngredient);
 }



//listener
//listner to add more ingredients
addIngredient.addEventListener('click', addIngredientFunction);
// listner to submit the form
submitIngredient.addEventListener('click', submitIngrenientFunction);