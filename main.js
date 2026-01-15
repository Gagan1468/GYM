document.getElementById("userForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const age = +document.getElementById("age").value;
  const weight = +document.getElementById("weight").value;
  const height = +document.getElementById("height").value;
  const goal = document.getElementById("goal").value;
  const training = document.getElementById("training").value;

  let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  let activity = training === "light" ? 1.3 :
                 training === "moderate" ? 1.55 : 1.8;

  let calories = bmr * activity;
  if (goal === "bulk") calories += 300;
  if (goal === "cut") calories -= 300;

  localStorage.setItem("calories", Math.round(calories));
  localStorage.setItem("weight", weight);

  window.location.href = "dashboard.html";
});
