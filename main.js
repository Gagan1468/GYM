document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const goal = document.getElementById("goal").value;

  // Simple test (confirm JS working)
  alert("Welcome to SaaS 🚀");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});
