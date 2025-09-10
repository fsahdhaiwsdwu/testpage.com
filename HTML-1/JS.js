const btn = document.querySelector(".btn");
const myDiv = document.querySelector(".Random"); 

const holdColor = "#505050"; // light-gray

// Hold / click
btn.addEventListener("mousedown", () => {
  btn.style.transition = "none"; 
  btn.style.backgroundColor = holdColor;
});

// Release / mouse up
btn.addEventListener("mouseup", () => {
  btn.style.transition = "background-color 0.3s";
  btn.style.backgroundColor = ""; // remove inline style so hover works
});

// Mouse leaves while holding
btn.addEventListener("mouseleave", () => {
  btn.style.transition = "background-color 0.3s";
  btn.style.backgroundColor = ""; // remove inline style so hover works
});

// Click changes only H1 text
btn.addEventListener("click", () => {
  const h1 = myDiv.querySelector("h1");
  h1.textContent = "Jk, it is not bought by ea.";
});
