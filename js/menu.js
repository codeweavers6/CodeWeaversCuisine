'use strict';
var menu = document.getElementById('meals-list');         // menu container
var displayFormButton = document.getElementById('add-meal-button');   // display form
var addMealToMenuForm = document.getElementById('main-menu-form')    // add form to main container

var menuList = [];  // list of meals objects

var submitIngredients = [];   // get user ingredients
// ........................................................ Data Model properties + methods + objects
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
fattoushSalad.setPrice();

var PizzaExtravaganza = new MainMenu('pizza extravaganza', 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
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

var piquant = new MainMenu('PIQUANT PEPPER TART', 'https://cdn.pixabay.com/photo/2017/06/16/18/35/tarte-2409958_960_720.jpg',
    [
        ' crème fraîche',
        'vinaigrette-dressed salad',
        'flour',
        'caster sugar',
        'pinch salt',
        'Parmesan, grated'
    ]);
piquant.setPrice();

var salmon_fish = new MainMenu('Salmon Fish', 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg',
    [
        'salmon',
        'mustard',
        'maple syrup',
        'garlic',
        'salt'
    ]);
salmon_fish.setPrice();

var barbecue = new MainMenu(' Barbecue', 'https://cdn.pixabay.com/photo/2016/04/04/17/22/asparagus-1307604_960_720.jpg',
    [
        'beef steak',
        'marinade',
        'Spiced Cider and Maple Marinade',
        'Lemon-Pepper Marinade',
        'pine Soy-Balsamic Marinade',
        'Wine and Herb Marinade'
    ]);
barbecue.setPrice();

function displayMeals() { // render meals on screen
    for (var i = 0; i < menuList.length; i++) {
        createMeal(menuList[i])
    }
}
// ................................................................. menu creation functions
function createMeal(meal) {  // add meal to html
    var div = document.createElement('div');  // create container div
    div.setAttribute('class', 'meal')
    menu.appendChild(div);

    var imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'img-div')
    div.append(imgDiv)

    var infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'info-div')
    div.append(infoDiv)

    var img = document.createElement('img'); // add image
    img.setAttribute('src', meal.imgUrl)
    imgDiv.append(img)

    var h1 = document.createElement('h1');  // add name and price
    infoDiv.append(h1);

    var b = document.createElement(`b`);  // name bold
    b.textContent = meal.name;
    h1.append(b);

    var h3 = document.createElement('h3'); // price
    h3.innerText = ` ${meal.price}$`
    infoDiv.append(h3);

    for (var i = 0; i < meal.ingredients.length; i++) {  // add ingredients
        var p2 = document.createElement('p');
        p2.textContent = meal.ingredients[i];
        infoDiv.append(p2);
    }

    var button = document.createElement('button');
    button.setAttribute('onClick', "window.location.href='delivery.html';")
    button.textContent = 'Buy Meal';
    infoDiv.append(button);
}

function displayForm() {   // display form funtion
    addMealToMenuForm.style.display = 'block';
}

function addNewMeal(event) {   // take meal information from user
    event.preventDefault();
    menu.innerHTML = '';
    var name = event.target.name.value;
    var image = event.target.image.value;
    var ingredient = event.target.ingredient.value;
    ingredient = ingredient.split(',')

    var newMeal = new MainMenu(name, image, ingredient);  // add it to consturctor
    newMeal.setPrice();


    addToLocalStorage()
    getFromListStorage()
    displayMeals(); // display  element

    addMealToMenuForm.style.display = 'none'; // hide form after submit
}
// ............................ data storage functions 
function addToLocalStorage() {
    localStorage.setItem('menu', JSON.stringify(menuList))
}
function getFromListStorage() {
    if (localStorage.length > 0) {
        menuList = JSON.parse(localStorage.getItem('menu'));
    }
}
// ...........................executable code
displayFormButton.addEventListener('click', displayForm); // add new meal
addMealToMenuForm.addEventListener('submit', addNewMeal); // submit

getFromListStorage();
displayMeals();