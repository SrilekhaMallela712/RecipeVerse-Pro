/* =====================================
   RECIPEVERSE PRO
   SCRIPT.JS PART 1
===================================== */

/* LOADER */
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if(loader){
            loader.style.display = "none";
        }
    }, 1200);
});

/* GLOBAL VARIABLES */

let currentRecipe = null;
let cookingStep = 0;
let timerInterval = null;
let timerSeconds = 0;

const recipes = [

{
    name: "Chocolate Cake",
    image: "chocolate-cake.jpg",
    category: "dessert",
    prepTime: "45 min",
    servings: "8",
    ingredients: [
        "Flour",
        "Cocoa Powder",
        "Eggs",
        "Milk",
        "Sugar"
    ],
    steps: [
        "Mix dry ingredients",
        "Add wet ingredients",
        "Prepare batter",
        "Bake cake",
        "Cool and serve"
    ]
},

{
    name: "Cheesecake",
    image: "cheesecake.jpg",
    category: "dessert",
    prepTime: "50 min",
    servings: "6",
    ingredients: [
        "Cream Cheese",
        "Sugar",
        "Eggs",
        "Vanilla"
    ],
    steps: [
        "Prepare crust",
        "Mix filling",
        "Pour filling",
        "Bake",
        "Chill and serve"
    ]
},

{
    name: "Brownies",
    image: "brownies.jpg",
    category: "dessert",
    prepTime: "35 min",
    servings: "9",
    ingredients: [
        "Chocolate",
        "Butter",
        "Sugar",
        "Flour"
    ],
    steps: [
        "Melt chocolate",
        "Mix ingredients",
        "Prepare batter",
        "Bake",
        "Cut and serve"
    ]
},

{
    name: "Pizza",
    image: "pizza.jpg",
    category: "italian",
    prepTime: "30 min",
    servings: "4",
    ingredients: [
        "Pizza Base",
        "Cheese",
        "Sauce",
        "Vegetables"
    ],
    steps: [
        "Prepare base",
        "Add toppings",
        "Bake",
        "Slice",
        "Serve"
    ]
},

{
    name: "Burger",
    image: "burger.jpg",
    category: "fastfood",
    prepTime: "20 min",
    servings: "2",
    ingredients: [
        "Bun",
        "Patty",
        "Cheese",
        "Sauce"
    ],
    steps: [
        "Cook patty",
        "Toast bun",
        "Assemble burger",
        "Add toppings",
        "Serve"
    ]
},

{
    name: "Chicken Biryani",
    image: "chicken-biryani.jpg",
    category: "indian",
    prepTime: "60 min",
    servings: "5",
    ingredients: [
        "Rice",
        "Chicken",
        "Spices",
        "Onions"
    ],
    steps: [
        "Cook rice",
        "Prepare chicken",
        "Layer rice",
        "Cook on dum",
        "Serve"
    ]
},

{
    name: "Veg Biryani",
    image: "veg-biryani.jpg",
    category: "indian",
    prepTime: "45 min",
    servings: "4",
    ingredients: [
        "Rice",
        "Vegetables",
        "Spices"
    ],
    steps: [
        "Cook rice",
        "Prepare vegetables",
        "Layer ingredients",
        "Steam",
        "Serve"
    ]
},
{
    name: "Butter Chicken",
    image: "butter-chicken.jpg",
    category: "indian",
    prepTime: "40 min",
    servings: "4",
    ingredients: [
        "Chicken",
        "Butter",
        "Cream",
        "Spices"
    ],
    steps: [
        "Cook chicken",
        "Prepare gravy",
        "Mix together",
        "Simmer",
        "Serve"
    ]
},

{
    name: "Dosa",
    image: "dosa.jpg",
    category: "indian",
    prepTime: "25 min",
    servings: "3",
    ingredients: [
        "Dosa Batter",
        "Oil",
        "Chutney"
    ],
    steps: [
        "Heat pan",
        "Pour batter",
        "Spread evenly",
        "Cook",
        "Serve"
    ]
},

{
    name: "Idli",
    image: "idli.jpg",
    category: "indian",
    prepTime: "20 min",
    servings: "4",
    ingredients: [
        "Idli Batter"
    ],
    steps: [
        "Prepare moulds",
        "Pour batter",
        "Steam",
        "Cool slightly",
        "Serve"
    ]
},

{
    name: "Samosa",
    image: "samosa.jpg",
    category: "indian",
    prepTime: "30 min",
    servings: "4",
    ingredients: [
        "Potatoes",
        "Flour",
        "Spices"
    ],
    steps: [
        "Prepare filling",
        "Prepare dough",
        "Fill samosas",
        "Fry",
        "Serve"
    ]
},

{
    name: "Palak Paneer",
    image: "palak-paneer.jpg",
    category: "indian",
    prepTime: "35 min",
    servings: "4",
    ingredients: [
        "Spinach",
        "Paneer",
        "Spices"
    ],
    steps: [
        "Cook spinach",
        "Blend spinach",
        "Add paneer",
        "Cook",
        "Serve"
    ]
},

{
    name: "Pasta Red Sauce",
    image: "pasta-red.jpg",
    category: "italian",
    prepTime: "25 min",
    servings: "3",
    ingredients: [
        "Pasta",
        "Tomato Sauce",
        "Cheese"
    ],
    steps: [
        "Boil pasta",
        "Prepare sauce",
        "Mix",
        "Cook",
        "Serve"
    ]
},

{
    name: "Pasta White Sauce",
    image: "pasta-white.jpg",
    category: "italian",
    prepTime: "25 min",
    servings: "3",
    ingredients: [
        "Pasta",
        "Milk",
        "Cheese"
    ],
    steps: [
        "Boil pasta",
        "Prepare sauce",
        "Mix",
        "Cook",
        "Serve"
    ]
},

{
    name: "Lasagna",
    image: "lasagna.jpg",
    category: "italian",
    prepTime: "50 min",
    servings: "6",
    ingredients: [
        "Lasagna Sheets",
        "Cheese",
        "Sauce"
    ],
    steps: [
        "Layer sheets",
        "Add sauce",
        "Bake",
        "Cool",
        "Serve"
    ]
},

{
    name: "Noodles",
    image: "noodles.jpg",
    category: "asian",
    prepTime: "20 min",
    servings: "2",
    ingredients: [
        "Noodles",
        "Vegetables",
        "Sauce"
    ],
    steps: [
        "Boil noodles",
        "Stir fry vegetables",
        "Mix together",
        "Cook",
        "Serve"
    ]
},

{
    name: "Fried Rice",
    image: "fried-rice.jpg",
    category: "asian",
    prepTime: "20 min",
    servings: "3",
    ingredients: [
        "Rice",
        "Vegetables",
        "Soy Sauce"
    ],
    steps: [
        "Cook rice",
        "Stir fry vegetables",
        "Mix",
        "Season",
        "Serve"
    ]
},

{
    name: "Ramen",
    image: "ramen.jpg",
    category: "asian",
    prepTime: "30 min",
    servings: "2",
    ingredients: [
        "Noodles",
        "Broth",
        "Egg"
    ],
    steps: [
        "Prepare broth",
        "Cook noodles",
        "Combine",
        "Add toppings",
        "Serve"
    ]
},

{
    name: "Sushi",
    image: "sushi.jpg",
    category: "asian",
    prepTime: "45 min",
    servings: "4",
    ingredients: [
        "Rice",
        "Seaweed",
        "Vegetables"
    ],
    steps: [
        "Prepare rice",
        "Add filling",
        "Roll",
        "Slice",
        "Serve"
    ]
},

{
    name: "Pancakes",
    image: "pancakes.jpg",
    category: "dessert",
    prepTime: "20 min",
    servings: "3",
    ingredients: [
        "Flour",
        "Milk",
        "Eggs"
    ],
    steps: [
        "Mix batter",
        "Pour batter",
        "Flip",
        "Cook",
        "Serve"
    ]
},

{
    name: "Donuts",
    image: "donuts.jpg",
    category: "dessert",
    prepTime: "40 min",
    servings: "6",
    ingredients: [
        "Flour",
        "Sugar",
        "Yeast"
    ],
    steps: [
        "Prepare dough",
        "Shape donuts",
        "Fry",
        "Decorate",
        "Serve"
    ]
},

{
    name: "Ice Cream",
    image: "icecream.jpg",
    category: "dessert",
    prepTime: "15 min",
    servings: "4",
    ingredients: [
        "Milk",
        "Cream",
        "Sugar"
    ],
    steps: [
        "Mix ingredients",
        "Freeze",
        "Chill",
        "Serve",
        "Enjoy"
    ]
},

{
    name: "Cold Coffee",
    image: "cold-coffee.jpg",
    category: "drinks",
    prepTime: "10 min",
    servings: "2",
    ingredients: [
        "Coffee",
        "Milk",
        "Ice"
    ],
    steps: [
        "Blend ingredients",
        "Pour",
        "Serve"
    ]
},

{
    name: "Mango Shake",
    image: "mango-shake.jpg",
    category: "drinks",
    prepTime: "10 min",
    servings: "2",
    ingredients: [
        "Mango",
        "Milk",
        "Sugar"
    ],
    steps: [
        "Blend ingredients",
        "Pour",
        "Serve"
    ]
},

{
    name: "Lemonade",
    image: "lemonade.jpg",
    category: "drinks",
    prepTime: "5 min",
    servings: "2",
    ingredients: [
        "Lemon",
        "Sugar",
        "Water"
    ],
    steps: [
        "Mix ingredients",
        "Stir",
        "Serve"
    ]
},
/* =====================================
   END OF RECIPE ARRAY
===================================== */

];

/* =====================================
   DOM ELEMENTS
===================================== */

const recipeGrid = document.getElementById("recipeGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalPrepTime = document.getElementById("modalPrepTime");
const modalServings = document.getElementById("modalServings");

const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");

const ingredientsContainer =
document.getElementById("ingredientsContainer");

const stepsContainer =
document.getElementById("stepsContainer");

/* =====================================
   DISPLAY RECIPES
===================================== */

function displayRecipes(recipeArray){

    if(!recipeGrid) return;

    recipeGrid.innerHTML = "";

    const categories = {};

    recipeArray.forEach(recipe => {

        if(!categories[recipe.category]){

            categories[recipe.category] = [];

        }

        categories[recipe.category].push(recipe);

    });

    Object.keys(categories).forEach(category => {

        let cardsHTML = "";

        categories[category].forEach(recipe => {

            cardsHTML += `

            <div class="recipe-card">

                <div class="recipe-image">

                    <img
                        src="${recipe.image}"
                        alt="${recipe.name}"
                    >

                    <span class="recipe-tag">
                        ${recipe.category}
                    </span>

                </div>

                <div class="recipe-content">

                    <h3>${recipe.name}</h3>

                    <div class="recipe-meta">

                        <span>
                            ⏱ ${recipe.prepTime}
                        </span>

                        <span>
                            🍽 ${recipe.servings}
                        </span>

                    </div>

                    <div class="card-buttons">

                        <button
                        class="view-recipe-btn"
                        onclick="openRecipe('${recipe.name}')">

                        View Recipe

                        </button>

                        <button
                        class="favorite-card-btn"
                        onclick="addToFavorites('${recipe.name}')">

                        ❤️

                        </button>

                    </div>

                </div>

            </div>

            `;

        });

        recipeGrid.innerHTML += `

        <section class="category-section">

            <h2 class="category-heading">

                ${category.toUpperCase()}

            </h2>

            <div class="category-grid">

                ${cardsHTML}

            </div>

        </section>

        `;

    });

}

displayRecipes(recipes);

/* =====================================
   SEARCH
===================================== */

let currentCategory = "all";

function applyFilters(){

    const searchValue =
    searchInput.value.toLowerCase();

    const filtered =
    recipes.filter(recipe => {

        const matchesSearch =

recipe.name
.toLowerCase()
.includes(searchValue)

||

recipe.category
.toLowerCase()
.includes(searchValue);

        const matchesCategory =
        currentCategory === "all"
        ||
        recipe.category === currentCategory;

        return matchesSearch &&
               matchesCategory;

    });

    displayRecipes(filtered);

}

if(searchInput){

    searchInput.addEventListener("input", () => {

        applyFilters();

        const suggestions =
        document.getElementById(
        "searchSuggestions"
        );

        if(!suggestions) return;

        const value =
        searchInput.value
        .toLowerCase();

        suggestions.innerHTML = "";

        if(value.length === 0){

            return;

        }

        const matches =
        recipes.filter(recipe =>

            recipe.name
            .toLowerCase()
            .includes(value)

        );

        matches.forEach(recipe => {

            const item =
            document.createElement("div");

            item.className =
            "suggestion-item";

            item.textContent =
            recipe.name;

            item.addEventListener(
                "click",
                () => {

                    searchInput.value =
                    recipe.name;

                    suggestions.innerHTML =
                    "";

                    applyFilters();

                }
            );

            suggestions.appendChild(
                item
            );

        });

    });

}

/* =====================================
   CATEGORY FILTER
===================================== */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
        button.dataset.category;

        applyFilters();

    });

});

/* =====================================
   OPEN RECIPE
===================================== */

function openRecipe(recipeName){

    const recipe =
    recipes.find(r => r.name === recipeName);

    if(!recipe) return;

    currentRecipe = recipe;

    modalTitle.textContent =
    recipe.name;

    modalImage.src =
    recipe.image;

    modalPrepTime.textContent =
    recipe.prepTime;

    modalServings.textContent =
    recipe.servings;

    ingredientsList.innerHTML = "";
    stepsList.innerHTML = "";

    recipe.ingredients.forEach(item => {

        ingredientsList.innerHTML +=
        `<li>${item}</li>`;

    });

    recipe.steps.forEach(step => {

        stepsList.innerHTML +=
        `<li>${step}</li>`;

    });

    ingredientsContainer.classList.add("hidden");
    stepsContainer.classList.add("hidden");

    resetCooking();

    modal.style.display = "block";
}

window.openRecipe = openRecipe;

/* =====================================
   CLOSE MODAL
===================================== */

if(closeModal){

    closeModal.addEventListener(
        "click",
        () => modal.style.display = "none"
    );

}

window.addEventListener("click", e => {

    if(e.target === modal){

        modal.style.display = "none";

    }

});

/* =====================================
   TOGGLE SECTIONS
===================================== */

document
.getElementById("toggleIngredients")
?.addEventListener("click", () => {

    ingredientsContainer.classList.toggle(
        "hidden"
    );

});

document
.getElementById("toggleSteps")
?.addEventListener("click", () => {

    stepsContainer.classList.toggle(
        "hidden"
    );

});

/* =====================================
   COOKING MODE
===================================== */

const currentStepDisplay =
document.getElementById("currentStepDisplay");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

function resetCooking(){

    cookingStep = 0;

    currentStepDisplay.textContent =
    "Click Start Cooking";

    progressFill.style.width = "0%";

    progressText.textContent = "0%";
}

document
.getElementById("startCooking")
?.addEventListener("click", () => {

    if(!currentRecipe) return;

    cookingStep = 0;

    currentStepDisplay.textContent =
    currentRecipe.steps[0];

    const percent =
    Math.round(
        (1 / currentRecipe.steps.length)
        * 100
    );

    progressFill.style.width =
    percent + "%";

    progressText.textContent =
    percent + "%";

});

document
.getElementById("nextStep")
?.addEventListener("click", () => {

    if(!currentRecipe) return;

    cookingStep++;

    if(cookingStep <
       currentRecipe.steps.length){

        currentStepDisplay.textContent =
        currentRecipe.steps[cookingStep];

        const percent =
        Math.round(

            (
                (cookingStep + 1)
                /
                currentRecipe.steps.length
            ) * 100

        );

        progressFill.style.width =
        percent + "%";

        progressText.textContent =
        percent + "%";

    }

    else{

        currentStepDisplay.textContent =
        "Recipe Completed 🎉";

        progressFill.style.width =
        "100%";

        progressText.textContent =
        "100%";
    }

});

/* =====================================
   TIMER
===================================== */

const timerDisplay =
document.getElementById("timerDisplay");

function updateTimer(){

    const mins =
    String(
        Math.floor(timerSeconds / 60)
    ).padStart(2,"0");

    const secs =
    String(
        timerSeconds % 60
    ).padStart(2,"0");

    timerDisplay.textContent =
    `${mins}:${secs}`;
}

document
.getElementById("startTimer")
?.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        timerSeconds++;

        updateTimer();

    },1000);

});

document
.getElementById("pauseTimer")
?.addEventListener("click", () => {

    clearInterval(timerInterval);

});

document
.getElementById("resetTimer")
?.addEventListener("click", () => {

    clearInterval(timerInterval);

    timerSeconds = 0;

    updateTimer();

});

updateTimer();

/* =====================================
   RANDOM RECIPE
===================================== */

function openRandomRecipe(){

    const randomIndex =
    Math.floor(
        Math.random() *
        recipes.length
    );

    openRecipe(
        recipes[randomIndex].name
    );
}

window.openRandomRecipe =
openRandomRecipe;

/* =====================================
   PRINT
===================================== */

document
.getElementById("printRecipe")
?.addEventListener("click", () => {

    window.print();

});

/* =====================================
   FAVORITES PANEL
===================================== */

const favorites = [];
function addToFavorites(recipeName){

    const recipe =
    recipes.find(
        r => r.name === recipeName
    );

    if(!recipe) return;

    const favoritesList =
    document.getElementById(
    "favoritesList"
    );

    if(!favoritesList) return;

    const alreadyExists =
    [...favoritesList.children]
    .some(item =>
        item.textContent === recipe.name
    );

    if(alreadyExists){

        alert("Already in Favorites ❤️");
        return;

    }

    const div =
    document.createElement("div");

    div.className =
    "favorite-item";

    div.innerHTML = `

        <div style="
            padding:12px;
            margin-bottom:10px;
            border-radius:12px;
            background:white;
            box-shadow:0 4px 10px rgba(0,0,0,.1);
        ">

            ❤️ ${recipe.name}

        </div>

    `;

    favoritesList.appendChild(div);

}

const favoritesDrawer =
document.getElementById(
"favoritesDrawer"
);

document
.getElementById("favoriteBtn")
?.addEventListener("click", () => {

    favoritesDrawer.classList.add(
        "active"
    );

});

document
.getElementById("closeFavorites")
?.addEventListener("click", () => {

    favoritesDrawer.classList.remove(
        "active"
    );

});

/* =====================================
   DARK MODE
===================================== */

const darkModeBtn =
document.getElementById("darkModeBtn");

if(localStorage.getItem("theme")
=== "dark"){

    document.body.classList.add(
        "dark"
    );

}

darkModeBtn?.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

        localStorage.setItem(
            "theme",
            document.body.classList.contains(
                "dark"
            )
            ? "dark"
            : "light"
        );

    }
);
