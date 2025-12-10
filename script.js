// ---------------------------
// Create the main cursor star
// ---------------------------
const cursorStar = document.createElement("div");
cursorStar.className = "cursor-star";
document.body.appendChild(cursorStar);

// ---------------------------
// Trail timing setup
// ---------------------------
let lastTime = 0;
const spawnDelay = 400; // bigger number = more spaced-out sparkles

// ---------------------------
// Random color function
// ---------------------------
let starToggle = false;

function clickStarColor() {
  starToggle = !starToggle;  // flip between true/false
  return starToggle ? "maroon" : "#99ad27";
}   

document.addEventListener("click", () => {
  // cursor star color switches
  cursorStar.style.color = clickStarColor();
  star.style.color = cursorStar.style.color;

});

// ---------------------------
// Mousemove handler
// ---------------------------
document.addEventListener("mousemove", (e) => {
  
  // Move the main cursor star
  cursorStar.style.left = e.clientX + "px";
  cursorStar.style.top = e.clientY + "px";

  // Random color for the cursor star too
  cursorStar.style.color = randomStarColor();

  // Create sparkly trailing stars
  const now = Date.now();
  if (now - lastTime > spawnDelay) {
    lastTime = now;

    const star = document.createElement("div");
    star.className = "trail";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";

    // random color
    star.style.color = randomStarColor();

    document.body.appendChild(star);

    // Remove after fade-out
    setTimeout(() => star.remove(), 1400);
  }

});
