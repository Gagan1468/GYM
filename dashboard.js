<h1>Welcome to SaaS 💪</h1>
<p>Your Smart AI Athlete System dashboard.</p>

function load(page) {
  const main = document.getElementById("main");
  const calories = localStorage.getItem("calories");
  const protein = localStorage.getItem("weight") * 2;

  if (page === "overview") {
    main.innerHTML = `
      <h1>Overview</h1>
      <div class="card">
        <p><b>Calories:</b> ${calories} kcal</p>
        <p><b>Protein Target:</b> ${protein} g</p>
      </div>
    `;
  }

  if (page === "food") {
    main.innerHTML = `
      <h1>Food Tracking</h1>
      <div class="card">
        <p>Scan food or log manually</p>
        <button class="primary-btn">Scan Food 📸</button>
      </div>
    `;
  }

  if (page === "exercise") {
    main.innerHTML = `
      <h1>Exercises</h1>
      <div class="card">Push • Pull • Legs</div>
    `;
  }

  if (page === "plans") {
    main.innerHTML = `
      <h1>Your Plan</h1>
      <div class="card">AI generated nutrition & workout plan</div>
    `;
  }

  if (page === "todo") {
    main.innerHTML = `
      <h1>To-Do</h1>
      <input placeholder="Add task">
    `;
  }

  if (page === "news") {
    main.innerHTML = `
      <h1>Fitness News</h1>
      <div class="card">Coming soon…</div>
    `;
  }
}

