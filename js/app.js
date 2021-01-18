' use strict ';

var arrayOfFood = [];
var arrayOfPaths = ['food1.jpg', 'food2.jpg'];
var arrayOfIngredients = ['Salt.Peper.Garlic', 'Onion.Bell peper.Parsley'];

var getFoodId = 0;

var arrayOfStoredFood = [];

var arrayOfClickedItems = ["one", "two", "three", "four", "five", "six"];


var firstItem = document.getElementById("first-item");
var secondItem = document.getElementById("second-item");
var thirdItem = document.getElementById("third-item");
var forthItem = document.getElementById("forth-item");
var fifthItem = document.getElementById("fifth-item");
var sixthItem = document.getElementById("sixth-item");
var arrayOfItems = [firstItem, secondItem, thirdItem, forthItem, fifthItem, sixthItem];

var firstIngredients = document.getElementById("first-ingredients");
var secondIngredients = document.getElementById("second-ingredients");
var thirdIngredients = document.getElementById("third-ingredients");
var forthIngredients = document.getElementById("forth-ingredients");
var fifthIngredients = document.getElementById("fifth-ingredients");
var sixthIngredients = document.getElementById("sixth-ingredients");
var arrayOfIngredientsOfList = [firstIngredients, secondIngredients, thirdIngredients, forthIngredients, fifthIngredients, sixthIngredients];

var table = document.getElementById('table');

var cartButton = document.getElementById("cart-button");


function Meals(name, path, ingredients, price) {
    this.path = 'img/' + path;
    this.name = path.split('.')[0];
    this.ingredients = ingredients;
    this.price = price + '$';
    arrayOfFood.push(this);
}

function genRandomPrice() {
    return Math.round(Math.random()*(5-3)+3); 
}

for (var index = 0; index < arrayOfPaths.length; index++) {
    new Meals(arrayOfPaths[index],arrayOfIngredients[index].split('.'),genRandomPrice());
    // console.log(arrayOfFood[index].name);
    // console.log(arrayOfFood[index].path);
    // console.log(arrayOfFood[index].ingredients);
}

retrieveFood();
// console.log(arrayOfFood);

function renderSixItems() {
    for (let index2 = 0; index2 < arrayOfFood.length; index2++) {
        arrayOfItems[index2].textContent = arrayOfFood[index2].name;
        arrayOfIngredientsOfList[index2].textContent = arrayOfFood[index2].ingredients;
        // console.log(arrayOfFood[index2].ingredients);
    }   
}
// console.log(arrayOfFood);
renderSixItems();

function storeFood() {
    // console.log(1);
    localStorage.setItem('arrayOfStoredFood', JSON.stringify(arrayOfStoredFood)); 
}


function retrieveFood() {
    if (localStorage.length > 0) {
        arrayOfStoredFood = JSON.parse(localStorage.getItem('arrayOfStoredFood'));
    }
}

function redirect(event) {
    if (localStorage.length > 0){
        document.location = 'delivery.html';
    }
}

function checkClick(event){
    var checkId = event.target.id ;
    console.log(checkId);
    for (let index3 = 0; index3 < arrayOfClickedItems.length; index3++) {
        if (checkId === arrayOfClickedItems[index3]){
            arrayOfStoredFood.push(arrayOfFood[index3]);
            console.log(arrayOfFood[index3]);
            storeFood();
        }
    }
}

table.addEventListener('click',checkClick);

cartButton.addEventListener('click',redirect);