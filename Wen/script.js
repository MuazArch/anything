// Find the button
const button = document.getElementById("btn-cool-button-4");

// Tell it what to do when clicked
button.addEventListener("click", function() {
  const title = document.getElementById("title");
  title.textContent = "You clicked the button! 🎉";
  title.style.color = "blue";
});

const btn = document.getElementById("cool-button-3");
let clicked = false;

btn.addEventListener("click", () => {
  if (!clicked) {
    document.body.style.backgroundColor = "lightgreen";
    btn.textContent = "Click again!";
    clicked = true;
  } else {
    document.body.style.backgroundColor = "white";
    btn.textContent = "Click Me";
    clicked = false;
  }
});

