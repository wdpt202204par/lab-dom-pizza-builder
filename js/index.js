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
  glutenFreeCrust: false
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
  const mushroomsList   = document.querySelectorAll('.mushroom');

  mushroomsList.forEach(mushroom => {
    // The state (=== true) specify mushrooms should be visible
    if (state.mushrooms) {
      mushroom.style.display = '';
    // The state (=== false) specify mushrooms should be undisplayed
    } else {
      mushroom.style.display = 'none';
    }
  });
}

function renderGreenPeppers() {
  const mushroomsList   = document.querySelectorAll('.green-pepper');

  mushroomsList.forEach(greenPepper => {
    if (state.greenPeppers) {
      greenPepper.style.display = '';
    } else {
      greenPepper.style.display = 'none';
    }
  });
};

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const whiteSauce = document.querySelector('.sauce');

  if (state.whiteSauce) {
    whiteSauce.classList.add('sauce-white');
  } else {
    whiteSauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const glutenFreeCrust = document.querySelector('.crust');

  if (state.glutenFreeCrust) {
    glutenFreeCrust.classList.add('sauce-white');
  } else {
    glutenFreeCrust.classList.remove('sauce-white');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const pepperoni     = document.querySelector('.btn-pepperoni')
  const mushrooms     = document.querySelector('.btn-mushrooms')
  const greenPeppers  = document.querySelector('.btn-green-peppers')
  const sauce         = document.querySelector('.btn-sauce')
  const crust         = document.querySelector('.btn-crust')

  state.pepperoni       ? pepperoni.classList.add('active') : pepperoni.classList.remove('active');
  state.mushrooms       ? mushrooms.classList.add('active') : mushrooms.classList.remove('active');
  state.greenPeppers    ? greenPeppers.classList.add('active') : greenPeppers.classList.remove('active');
  state.whiteSauce      ? sauce.classList.add('active') : sauce.classList.remove('active');
  state.glutenFreeCrust ? crust.classList.add('active') : crust.classList.remove('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const extraIngredientsList  = document.querySelector('.panel.price ul');
  const totalPrice            = document.querySelector('.panel.price strong');
  let extraIngredient;
  let total = basePrice;

  // Resetting the list
  extraIngredientsList.innerHTML = '';

  // For each "ingredient" (as defined in the "ingredients" constant), check the related state (in "state" constant)
  // and add a new <li> element to the <ul> list of extra ingredients
  Object.keys(ingredients).forEach((ingredient) => {
    if (state[ingredient]) {
      extraIngredient = document.createElement("li");
      extraIngredient.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      extraIngredientsList.appendChild(extraIngredient);
      
      // Updating the total price
      total += ingredients[ingredient].price;
    }
  });

  // Printing the final price
  totalPrice.innerHTML = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn-mushrooms').addEventListener('click', function() {
  state.mushrooms = !state.mushrooms;   // !true -> false, !false -> true
 renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;   // !true -> false, !false -> true
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;   // !true -> false, !false -> true
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;   // !true -> false, !false -> true
  renderEverything();
});


