const latestMealContainer = document.getElementById('latest-meal');
const searchMealContainer = document.getElementById('search-meal-con');
const notFound = document.getElementById('not-found');
const latestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=l';
const searchInput = document.getElementById('search-meal');
const searchBtn = document.getElementById('search-btn');
const loading = document.getElementById('loading');

// call api for latest meal
const getLatestMeal = async (url) => {
  loading.classList.remove('hidden');
  try {
    const res = await fetch(url);
    const data = await res.json();
    loading.classList.add('hidden');
    if (data.meals === null) {
      notFound.classList.remove('hidden');
    } else {
      getLatestMealData(data);
    }
  } catch (error) {
    console.log(error);
  }
};

// call API with input data
const getSearchMeal = async (url) => {
  loading.classList.remove('hidden');
  try {
    const res = await fetch(url);
    const data = await res.json();
    searchMealContainer.textContent = '';
    if (data.meals === null) {
      notFound.classList.remove('hidden');
      latestMealContainer.style.display = 'none';
    } else {
      getSearchMealData(data);
    }
    loading.classList.add('hidden');
  } catch (error) {
    loading.classList.add('hidden');
    console.log(error);
    loading.classList.add('hidden');
  }
};

getLatestMeal(latestUrl);

// get meal name from input
const getInput = () => {
  searchBtn.addEventListener('click', () => {
    const searchValue = searchInput.value;
    if (searchValue === '') {
      searchInput.style.border = `1px solid red`;
      searchInput.style.borderRight = `none`;
      searchBtn.style.border = `1px solid red`;
      searchBtn.style.borderLeft = `none`;
    } else {
      searchInput.style.border = `none`;
      searchBtn.style.border = `none`;
      const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
      getSearchMeal(searchUrl);
      searchInput.value = '';
    }
  });
};
getInput();

// add data to latest container 
const getLatestMealData = (data) => {
  const meals = data.meals;
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
};

// add data to search container
const getSearchMealData = (data) => {
  console.log(searchMealContainer);
  const meals = data.meals;
  meals.forEach((meal) => {
    const div = document.createElement('div');
    div.innerHTML = `
             <img src="${meal.strMealThumb}" alt="">
             <h4 class="text-center text-amber-600">${meal.strMeal}</h4>
        `;
    searchMealContainer.appendChild(div);
    latestMealContainer.style.display = 'none';
    div.addEventListener('click', () => {
      // set data to local storage
      localStorage.setItem('mealId', JSON.stringify(meal.idMeal));
      // navigate to single meal page
      window.location.href = 'mealDetails.html';
    });
  });
};

// go back to home page
document.getElementById('home-page').addEventListener('click',()=>{
      window.location.href = 'index.html';
   
});