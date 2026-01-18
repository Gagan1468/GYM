function loadPage(page) {
  const content = document.getElementById("content");

  if (page === "overview") {
    content.innerHTML = `
      <h1>Overview</h1>
      <p class="muted">Today at a glance</p>

      <div class="grid">
        <div class="card">
          <h3>Calories</h3>
          <p class="big">${localStorage.getItem("calories") || "--"} kcal</p>
        </div>
        <div class="card">
          <h3>Protein</h3>
          <p class="big">${(localStorage.getItem("weight") * 2) || "--"} g</p>
        </div>
        <div class="card">
          <h3>Status</h3>
          <p class="big">On Track</p>
        </div>
      </div>
    `;
  }

  if (page === "food") {
    content.innerHTML = `
      <h1>Food</h1>
      <div class="card">
        <p>Track your meals and macros.</p>
        <button class="btn">Scan Food 📸</button>
      </div>
    `;
  }

  if (page === "exercise") {
    content.innerHTML = `
      <h1>Exercises</h1>
      <div class="card">Push • Pull • Legs</div>
    `;
  }

  if (page === "plans") {
    content.innerHTML = `
      <h1>Plans</h1>
      <div class="card">AI-generated training & nutrition plan</div>
    `;
  }

  if (page === "todo") {
    content.innerHTML = `
      <h1>To-Do</h1>
      <div class="card">
        <input placeholder="Add task" />
      </div>
    `;
  }

  if (page === "news") {
    content.innerHTML = `
      <h1>News</h1>
      <div class="card">Latest fitness updates coming soon</div>
    `;
  }
}
