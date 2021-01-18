'use strict';
var displayFormButton = document.getElementById(`add-meal-button`);
var submitButton = document.getElementById('submit-button');
var menu = document.getElementById('meals-list');  // meals container
var menuContainer = document.getElementById('form') // add form to main container

var menuList = [];  // list of meals objects
var submitIngredients = [];   // get user data
var menuSotrage = [];

function MainMenu(name, url, ingredients) {
    this.name = name;
    this.imgUrl = url;
    this.price = 0;
    this.ingredients = ingredients;

    this.setPrice = function () {
        var setPrice = (Math.random() * (5 - 3) + 3).toFixed(2)
        return this.price = setPrice;
    }
    menuList.push(this);
}

var fattoushSalad = new MainMenu('Arabic Fattoush Salad', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5Oi8p3Z83V51GhVzCymoup-u8SvcBB5OVw&usqp=CAU",
    [
        'vegetable oil',
        'pita breads',
        'cucumber',
        'onion'
    ])
fattoushSalad.setPrice()

var PizzaExtravaganza = new MainMenu('pizza extravaganza', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkfT9fPCwE_xPOdFRUYOsBPZErI57AfK7EA&usqp=CAU',
    [
        'vegetable oil',
        'pita breads',
        'cucumber',
        'onion'
    ]
)
PizzaExtravaganza.setPrice()

var mansaf = new MainMenu('mansaf', 'https://cdn.theculturetrip.com/wp-content/uploads/2017/03/jordanian-mansaf-topped-with-herbs-1024x721.jpg',
    [
        'meat',
        'jameed',
        'rice',
        'flatbread',
        'pine nuts'
    ]);
mansaf.setPrice();

function displayMeals() { // render meals on screen
    for (var i = 0; i < menuList.length; i++) {
        createMeal(menuList[i])
    }
}

function createMeal(meal) {  // add meal to html
    var div = document.createElement('div');  // create container div
    menu.appendChild(div);

    var img = document.createElement('img'); // add image
    img.setAttribute('src', meal.imgUrl)
    div.append(img)

    var h1 = document.createElement('h1');  // add name and price
    div.append(h1);

    var b = document.createElement(`b`);  // name bold
    b.textContent = meal.name;
    h1.append(b);

    var span = document.createElement('span'); // price
    span.innerText = ` ${meal.price}$`
    h1.append(span);

    var p2 = document.createElement('p2'); // add ingredients
    p2.textContent = meal.ingredients;
    div.append(p2);

    var button = document.createElement('button');
    button.setAttribute('onClick', "window.location.href='delivery.html';")
    button.textContent = 'Buy Meal';
    div.append(button);

    var hr = document.createElement('hr');  // create container div
    menu.appendChild(hr);
}

function displayForm() {   // display form 
    form.style.display = 'block';
}

function addNewMeal(event) {   // submit meal from form to constructor
    event.preventDefault();
    menu.innerHTML = '';
    var name = event.target.name.value;
    var image = event.target.image.value;
    var ingredient = event.target.ingredient.value;
    submitIngredients.push(ingredient.split(','));
    var newMeal = new MainMenu(name, image, ingredient);  // add it to consturctor
    newMeal.setPrice();
    addListToStorage() // after object has been created

    displayMeals(); // display  element
    submitIngredients = [];

    form.style.display = 'none'; // hide form after submit
}

function addListToStorage() {

    localStorage.setItem('menu', JSON.stringify(menuList))

}
function getFromListStorage() {
    if (localStorage.length > 0) {
        menuList = JSON.parse(localStorage.getItem('menu'));
    }
    console.log(menuList)
}

displayFormButton.addEventListener('click', displayForm); // add new meal

form.addEventListener('submit', addNewMeal); // submit

getFromListStorage()
displayMeals();