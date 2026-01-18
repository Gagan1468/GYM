function loadPage(page) {
  const content = document.getElementById("content");
  const navLinks = document.querySelectorAll('nav a');
  
  // Update active nav link with smooth transition
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');

  // Fade out current content smoothly
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
          <button class="btn" id="scanFoodBtn"><i class="fas fa-camera"></i> Scan Food</button>
        </div>
      `;
      document.getElementById('scanFoodBtn').addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
          const file = e.target.files[0];
          if (file) {
            alert(`Food scanned: ${file.name}. AI analysis in progress...`);
          }
        };
        input.click();
      });
    }

    if (page === "exercise") {
      content.innerHTML = `
        <h1>Exercises <i class="fas fa-dumbbell"></i></h1>
        <div class="card">
          <h3>Today's Split</h3>
          <p>Push • Pull • Legs</p>
          <button class="btn" id="startWorkoutBtn"><i class="fas fa-play"></i> Start Workout</button>
        </div>
      `;
      document.getElementById('startWorkoutBtn').addEventListener('click', () => {
        alert('Starting your Push Day workout! Get ready to crush it.');
      });
    }

    if (page === "plans") {
      content.innerHTML = `
        <h1>Plans <i class="fas fa-chart-line"></i></h1>
        <div class="card">
          <p>AI-generated training & nutrition plan tailored to your goals.</p>
          <button class="btn" id="customizePlanBtn"><i class="fas fa-cog"></i> Customize Plan</button>
        </div>
      `;
      document.getElementById('customizePlanBtn').addEventListener('click', () => {
        const goals = prompt('Enter your goals (e.g., weight loss, muscle gain):');
        if (goals) {
          alert(`Customizing plan for: ${goals}. AI is generating your personalized plan...`);
        }
      });
    }

    if (page === "todo") {
      content.innerHTML = `
        <h1>To-Do <i class="fas fa-tasks"></i></h1>
        <div class="card">
          <input id="taskInput" placeholder="Add a new task..." />
          <button class="btn" id="addTaskBtn" style="margin-top: 15px;"><i class="fas fa-plus"></i> Add Task</button>
          <ul id="taskList" style="margin-top: 20px; list-style: none; padding: 0;"></ul>
        </div>
      `;
      document.getElementById('addTaskBtn').addEventListener('click', () => {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        if (taskText) {
          const taskList = document.getElementById('taskList');
          const li = document.createElement('li');
          li.innerHTML = `<i class="fas fa-check-circle" style="color: #ff9800; margin-right: 10px;"></i>${taskText}`;
          taskList.appendChild(li);
          taskInput.value = '';
        } else {
          alert('Please enter a task.');
        }
      });
    }

    if (page === "news") {
      content.innerHTML = `
        <h1>News <i class="fas fa-newspaper"></i></h1>
        <div class="card">
          <p>Latest fitness updates and AI insights coming soon.</p>
          <button class="btn" id="subscribeBtn"><i class="fas fa-bell"></i> Subscribe</button>
        </div>
      `;
      document.getElementById('subscribeBtn').addEventListener('click', () => {
        const email = prompt('Enter your email to subscribe:');
        if (email) {
          alert(`Subscribed with ${email}. You'll receive the latest updates!`);
        }
      });
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
