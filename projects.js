const hamburger = document.getElementById("hamburger");
const menu1 = document.getElementById("menu11");
const closeBtn = document.getElementById("button1");
let donate = document.getElementById("button-donate")


  
donate.addEventListener("click", function() {
  window.location.href = "donate.html";
});


hamburger.addEventListener("click", () => {
  menu1.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  menu1.style.display = "none"; 
});

window.addEventListener("click", (e) => {
  if (e.target === menu1) {
    menu1.style.display = "none";
  }
});