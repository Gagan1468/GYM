function analyzeFood() {
  const food = document.getElementById("foodSelect").value;
  let result = "";

  if (food === "banana") result = "Calories: 105 | Protein: 1.3g";
  if (food === "roti") result = "Calories: 120 | Protein: 3g";
  if (food === "paneer") result = "Calories: 265 | Protein: 18g";
  if (food === "rice") result = "Calories: 200 | Protein: 4g";

  document.getElementById("result").innerText = result || "Select food first";
}
