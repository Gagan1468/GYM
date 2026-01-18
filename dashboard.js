function loadPage(page) {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll('nav a');
  
  // Update active nav link
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

  // Fade out current content
  content.style.opacity = '0';
  content.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    if (page === "overview") {
      content.innerHTML = `
        <h1>Overview <i class="fas fa-eye"></i></h1>
        <p class="muted">Today at a glance</p>

        <div class="grid">
          <div class="card">
            <h3><i class="fas fa-fire"></i> Calories</h3>
            <p class="big">${localStorage.getItem("calories") || "--"} kcal</p>
          </div>
          <div class="card">
            <h3><i class="fas fa-drumstick-bite"></i> Protein</h3>
            <p class="big">${(localStorage.getItem("weight") * 2) || "--"} g</p>
          </div>
          <div class="card">
            <h3><i class="fas fa-check-circle"></i> Status</h3>
            <p class="big">On Track</p>
          </div>
        </div>
      `;
    }

    if (page === "food") {
      content.innerHTML = `
        <h1>Food <i class="fas fa-utensils"></i></h1>
        <div class="card">
          <p>Track your meals and macros with AI-powered analysis.</p>
          <button class="btn"><i class="fas fa-camera"></i> Scan Food</button>
        </div>
      `;
    }

    if (page === "exercise") {
      content.innerHTML = `
        <h1>Exercises <i class="fas fa-dumbbell"></i></h1>
        <div class="card">
          <h3>Today's Split</h3>
          <p>Push • Pull • Legs</p>
          <button class="btn"><i class="fas fa-play"></i> Start Workout</button>
        </div>
      `;
    }

    if (page === "plans") {
      content.innerHTML = `
        <h1>Plans <i class="fas fa-chart-line"></i></h1>
        <div class="card">
          <p>AI-generated training & nutrition plan tailored to your goals.</p>
          <button class="btn"><i class="fas fa-cog"></i> Customize Plan</button>
        </div>
      `;
    }

    if (page === "todo") {
      content.innerHTML = `
        <h1>To-Do <i class="fas fa-tasks"></i></h1>
        <div class="card">
          <input placeholder="Add a new task..." />
          <button class="btn" style="margin-top: 15px;"><i class="fas fa-plus"></i> Add Task</button>
        </div>
      `;
    }

    if (page === "news") {
      content.innerHTML = `
        <h1>News <i class="fas fa-newspaper"></i></h1>
        <div class="card">
          <p>Latest fitness updates and AI insights coming soon.</p>
          <button class="btn"><i class="fas fa-bell"></i> Subscribe</button>
        </div>
      `;
    }

    // Fade in new content
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
  }, 300);
}

// Initialize with fade-in
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  content.style.opacity = '1';
  content.style.transform = 'translateY(0)';
});
