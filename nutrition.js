const calories = +localStorage.getItem("calories");
const weight = +localStorage.getItem("weight");

const protein = weight * 2;
const fat = Math.round((calories * 0.25) / 9);
const carbs = Math.round((calories - (protein * 4 + fat * 9)) / 4);

document.getElementById("plan").innerHTML = `
  <p><b>Calories:</b> ${calories} kcal</p>
  <p><b>Protein:</b> ${protein} g</p>
  <p><b>Carbs:</b> ${carbs} g</p>
  <p><b>Fat:</b> ${fat} g</p>

  <h3>🍛 Sample Indian Gym Diet</h3>
  <ul>
    <li>Breakfast: Oats + Milk</li>
    <li>Lunch: Rice + Dal + Paneer</li>
    <li>Snack: Fruits + Nuts</li>
    <li>Dinner: Roti + Sabzi + Curd</li>
  </ul>
`;
