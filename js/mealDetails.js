const mealDetailsContainer = document.getElementById('meal-details-container');
const ingredientMeasurementContainer = document.getElementById(
  'ingredient-measure-container'
);
const instructionContainer = document.getElementById('instructions');
// fetch data from local storage
const mealId = JSON.parse(localStorage.getItem('mealId'));
const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

// call API with single meal id
const getMealById = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  setDataToContainer(data);
};

getMealById(mealUrl);

// set data to single meal container
const setDataToContainer = (singleMeal) => {
  console.log(singleMeal.meals[0].strMealThumb);
  const div = document.createElement('div');
  div.innerHTML = `
    <h3 class="text-2xl text-white font-semibold text-center">${singleMeal.meals[0].strMeal}</h3>
    <img
    class="object-cover w-1/3 mt-12 mx-auto"
    src="${singleMeal.meals[0].strMealThumb}"
    alt=""
    />
    `;
  mealDetailsContainer.appendChild(div);
  const ingredient = document.createElement('div');
  ingredient.className +=
    'border-r-2 border-dashed border-white p-3 text-white';
  ingredient.innerHTML = `
              <h4 class="text-xl font-medium text-center text-white">
            Ingredients
          </h4>
          <div class="mt-4 text-center">
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient1}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient2}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient3}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient4}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient5}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient6}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient7}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strIngredient8}</span
            >
          </div>
    `;

  ingredientMeasurementContainer.appendChild(ingredient);

  const measurement = document.createElement('div');

  measurement.className +=
    'border-r-2 border-dashed border-white p-3 text-white';
  measurement.innerHTML = `
              <h4 class="text-xl font-medium text-center text-white">
            Measurements
          </h4>
          <div class="mt-4 text-center">
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure1}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure2}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure3}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure4}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure5}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure6}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure7}</span
            >
            <span
              class="my-2 mx-1 border-2 px-2 py-1 hover:bg-white hover:text-black cursor-pointer rounded-3xl inline-block"
              >${singleMeal.meals[0].strMeasure8}</span
            >
          </div>
    `;

  ingredientMeasurementContainer.appendChild(measurement);

  const instructions = document.createElement('div');
  instructions.innerHTML = `
             <h4 class="text-xl font-medium text-center text-white">instructions</h4>
              <p class="text-justify mt-5 text-white text-lg">${singleMeal.meals[0].strInstructions}</p>
      `;

  instructionContainer.appendChild(instructions);
};

// go back to home page
document.getElementById('home-page').addEventListener('click',()=>{
      window.location.href = 'index.html';
   
});