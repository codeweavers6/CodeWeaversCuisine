' use strict ';

//====================================================================================================
//// Defining VARIABLES AND ARRAYS THAT WE ARE GONNA USE 

// Variables and arrays related to the constructor
var arrayOfFood = [];
var arrayOfPaths = ['pizza extravaganza.jpg', 'Salmon Fish.jpg', 'mansaf.jpg', 'Arabic Fattoush Salad.jpg', 'Barbecue.jpg', 'PIQUANT PEPPER TART.jpg'];
var arrayOfIngredients = ['Bell peper.Tomato sauce.Mozzarella.salami', 'Wild salmon.lime and garlic.Vegetable saute.Mash potato','Lamb meat.Greek yogurt.Karaki jameed.Basmati rice.pine nuts.Bread', 'Pita bread.lime.romaine lettuce.cinnamon.olive oil', 'beef steak.marinade.Spiced Cider and Maple Marinade.pine Soy-Balsamic Marinade','crème fraîche.flour.caster sugar.Parmesan.grated'];
var arrayOfPrices = [];
var getFoodId = 0;
var arrayOfStoredFood = [];

// Table data (td) IDs
var arrayOfClickedItems = ["one", "two", "three", "four", "five", "six"];

// IDs for (p) in each (li) in the HTML file
var firstItem = document.getElementById("first-item");
var secondItem = document.getElementById("second-item");
var thirdItem = document.getElementById("third-item");
var forthItem = document.getElementById("forth-item");
var fifthItem = document.getElementById("fifth-item");
var sixthItem = document.getElementById("sixth-item");
var arrayOfItems = [firstItem, secondItem, thirdItem, forthItem, fifthItem, sixthItem];

var table = document.getElementById('table');

// Two buttons one is to check the cart and redirect the user to checkout page and the other one is to clear the cart
var cartButton = document.getElementById("cart-button");
var clearShoppingCart = document.getElementById("clear-shopping-cart");

// Feedback variables
var feedbackBox = document.getElementById("customer-feedback-box");
var feedback = [];
var customersReview = 0;
//====================================================================================================
//Constructor for the meals
function Meals(path, ingredients, price) {
    this.path = 'img/' + path;
    this.name = path.split('.')[0];
    this.ingredients = ingredients;
    this.price = price + '$';
    arrayOfFood.push(this);
}

//====================================================================================================
////DECLARING FUNCTIONS

//Function that generates random price which will be assgined for each meal
function genRandomPrice() {
    return Math.round(Math.random() * (5 - 3) + 3);
}

//Assigning values to the contructor's properties 
for (var index = 0; index < arrayOfPaths.length; index++) {
    new Meals(arrayOfPaths[index], arrayOfIngredients[index].split('.'), genRandomPrice());
    // console.log(arrayOfFood[index].name);
    // console.log(arrayOfFood[index].path);
    // console.log(arrayOfFood[index].ingredients);
}

retrieveFood();

//Render the food in the table
function renderSixItems() {
    for (let index2 = 0; index2 < arrayOfFood.length; index2++) {
        arrayOfItems[index2].innerHTML = `${arrayOfFood[index2].name} <br> Ingredients: ${arrayOfFood[index2].ingredients} <br> Price: ${arrayOfFood[index2].price}`;
        // arrayOfIngredientsOfList[index2].textContent = `${arrayOfFood[index2].name} \n ${arrayOfFood[index2].ingredients}      ${arrayOfFood[index2].price}` ;
        // console.log(arrayOfFood[index2].ingredients);
    }
}

renderSixItems();

//Store user's orders which he clicked on in the table
function storeFood() {
    localStorage.setItem('arrayOfStoredFood', JSON.stringify(arrayOfStoredFood));
}


function retrieveFood() {
    if (arrayOfStoredFood.length > 0) {
        arrayOfStoredFood = JSON.parse(localStorage.getItem('arrayOfStoredFood'));
    }
}

retrieveFeedback();

function retrieveFeedback() {
    if (feedback.length > 0) {
        feedback = JSON.parse(localStorage.getItem('feedback'));
        renderFeedback();
    } else {
        feedback = []; 
    }
}

function renderFeedback() {
    for (let index4 = 0; index4 < feedback.length; index4++) {
        customersReview = document.createElement('li')
        customersReview.textContent = feedback[index4];
        feedbackBox.appendChild(customersReview);
        console.log(feedback[index4]);
    }
}


//====================================================================================================
////DEFINING FUNCTIONS FOR THE EVENTLISTENERS

//Function that redirects the user to the checkout page (delivery.html) when he clicks on the shopping cart button 
//if the cart (local storage) has items in it 
function redirect(event) {
    if (localStorage.length > 0) {
        document.location = 'delivery.html';
    } else {
        alert('Your cart is empty');
    }
}

//Clear the cart (localstorage) if the user clicks on clear cart button
function clearCart(event) {
    if (localStorage.length > 0) {
        localStorage.clear();
        alert('Your cart has been cleared');
    } else {
        alert('Your cart is empty already');
    }
}

//Function checks if the clicked on the items in the table and if he did it would push the items that he clicked on 
//to array of stored items and then call the store function 
function checkClick(event) {
    var checkId = event.target.id;
    console.log(checkId);
    for (let index3 = 0; index3 < arrayOfClickedItems.length; index3++) {
        if (checkId === arrayOfClickedItems[index3] || checkId === arrayOfItems[index3].id) {
            arrayOfStoredFood.push(arrayOfFood[index3]);
            storeFood();
        }
    }
}

//====================================================================================================
////DECLARING EVENTLISTENERS

//Event listener that listens for clicks on the meals table and then call the function checkClick
table.addEventListener('click', checkClick);

//Event listener that listens for clicks on the cart button and then call the function redirect
cartButton.addEventListener('click', redirect);

//Event listener that listens for clicks on the clear cart button and then call the function clearCart
clearShoppingCart.addEventListener('click', clearCart);