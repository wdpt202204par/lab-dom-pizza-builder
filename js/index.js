// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce-white').forEach((WhiteSauce) => {
    if (state.whiteSauce) {
      WhiteSauce.style.visibility = 'visible';
    } else {
      WhiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenFree = document.querySelector('.crust-gluten-free')
  console.log(glutenFree)
    if (state.glutenFreeCrust) {
      glutenFree.style.visibility = 'visible';
    } else {
      glutenFree.style.visibility = 'hidden';
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //1. déclaration des variables
  let pepperoni = document.querySelector('.btn.btn-pepperoni')
  let mushrooms = document.querySelector('.btn.btn-mushrooms')
  let greenPeppers=document.querySelector('.btn.btn-green-peppers')
  let sauce = document.querySelector('.btn.btn-sauce')
  let crust= document.querySelector('.btn.btn-crust')
 
  if (state.pepperoni){
    pepperoni.setAttribute("class","btn btn-pepperoni")
  }
  else{
    pepperoni.setAttribute("class","btn btn-pepperoni active")
  }

  if (state.mushrooms){
    mushrooms.setAttribute("class","btn btn-mushrooms")
  }
  else{
    mushrooms.setAttribute("class","btn btn-mushrooms active")
  }

  if (state.greenPeppers){
    greenPeppers.setAttribute("class","btn btn-green-peppers")
  }
  else{
    greenPeppers.setAttribute("class","btn btn-green-peppers active")
  }

  if (state.whiteSauce){
    sauce.setAttribute("class","btn btn-sauce")
  }
  else{
    sauce.setAttribute("class","btn btn-sauce active")
  }

  if (state.glutenFreeCrust){
    crust.setAttribute("class","btn btn-crust")
  }
  else{
    crust.setAttribute("class","btn btn-crust active")
  }

  


}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let list = Array.from(document.querySelectorAll(".panel .price ul > li"))
  console.log(list)
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function (){
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function (){
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function (){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function (){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});