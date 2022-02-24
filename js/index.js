const latestMealContainer = document.getElementById('latest-meal');
const latestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=l';
const searchInput = document.getElementById('search-meal');
const searchBtn = document.getElementById('search-btn');
const getLatestMeal = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  getLatestMealData(data);
  // console.log(data.meals);
};

const getSearchMeal = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  latestMealContainer.textContent = '';
  getLatestMealData(data);
};

getLatestMeal(latestUrl);
const getInput = () => {
  searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value;
    const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
    getSearchMeal(searchUrl);
    searchInput.value = '';
  });
};
getInput();

const getLatestMealData = (data) => {
  const meals = data.meals;
    // console.log(meals.length);
  if (meals.length == 0) {
    const p = document.createElement('p');
    p.innerText = `no data found`;
    latestMealContainer.appendChild(p);
  } else {
    meals.forEach((meal) => {
      const div = document.createElement('div');
      div.innerHTML = `
             <img src="${meal.strMealThumb}" alt="">
             <h4 class="text-center text-amber-600">${meal.strMeal}</h4>
        `;
      latestMealContainer.appendChild(div);
      div.addEventListener('click', () => {
        localStorage.setItem('mealId', JSON.stringify(meal.idMeal));
        window.location.href = 'mealDetails.html';
      });
    });
  }
};
