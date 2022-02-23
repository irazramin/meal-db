const latestMealContainer = document.getElementById('latest-meal');

const latestUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=l';
const getLatestMeal = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    getLatestMealData(data);
    console.log(data.meals);
}

getLatestMeal(latestUrl);

const getLatestMealData = (data) =>{
    
    const meals = data.meals
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = `
             <img src="${meal.strMealThumb}" alt="">
             <h4 class="text-center text-amber-600">${meal.strMeal}</h4>
        `;
        latestMealContainer.appendChild(div);
        div.addEventListener('click', () =>{
            localStorage.setItem(
              'mealId',
              JSON.stringify(meal.idMeal)
            );
            window.location.href = 'mealDetails.html';
        })
    });
} 