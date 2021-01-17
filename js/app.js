' use strict ';

var arrayOfFood = [];
var arrayOfPaths = ['food1.jpg','food2.jpg'];
var arrayOfIngredients = ['Salt.Peper.Garlic','Onion.Bell peper.Parsley']; 

var firstItem = document.getElementById("first-item");
var secondItem = document.getElementById("second-item");
var thirdItem = document.getElementById("third-item");
var forthItem = document.getElementById("forth-item");
var fifthItem = document.getElementById("fifth-item");
var sixthItem = document.getElementById("sixth-item");

function Meals (path,ingredients,price) {
    this.path = 'img/' + path;
    this.name = path.split('.')[0];
    this.ingredients = ingredients;
    this.price = price;
    arrayOfFood.push(this);
}

for (var index = 0; index < arrayOfPaths.length; index++) {
    new Meals(arrayOfPaths[index],arrayOfIngredients[index].split('.'));
    // console.log(arrayOfFood[index].name);
    // console.log(arrayOfFood[index].path);
    // console.log(arrayOfFood[index].ingredients);
}

// console.log(arrayOfFood);

firstItem.textContent = arrayOfFood[0].name;

