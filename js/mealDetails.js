const mealId = JSON.parse(localStorage.getItem("mealId"));
const mealUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
localStorage.clear();

const getMealById = async (url) =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}

getMealById(mealUrl)
