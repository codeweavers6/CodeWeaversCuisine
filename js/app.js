' use strict ';

var arrayOfFood = [];
var arrayOfPaths = ['food1.jpg', 'food2.jpg'];
var arrayOfIngredients = ['Salt.Peper.Garlic', 'Onion.Bell peper.Parsley'];

var firstItem = document.getElementById("first-item");
var secondItem = document.getElementById("second-item");
var thirdItem = document.getElementById("third-item");
var forthItem = document.getElementById("forth-item");
var fifthItem = document.getElementById("fifth-item");
var sixthItem = document.getElementById("sixth-item");

function Meals(name, path, ingredients, price) {
    this.path = 'img/' + path;
    this.name = path.split('.')[0];
    this.ingredients = ingredients;
    this.price = price;
    arrayOfFood.push(this);
}


