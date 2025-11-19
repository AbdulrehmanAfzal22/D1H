document.addEventListener('DOMContentLoaded', () => {
  // const donate = document.getElementById("button-donate");
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu11");
  const close = document.getElementById("button1");
  const html = document.documentElement;

 hamburger.addEventListener("click", function (event) {
  event.stopPropagation(); 
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});


close.addEventListener("click", function (event) {
  event.stopPropagation(); 
  menu.style.display = "none";
});


html.addEventListener("click", function () {
  menu.style.display = "none"; 
});


menu.addEventListener("click", function (event) {
  event.stopPropagation(); 
});




  const footer = document.querySelector(".footer");
  window.addEventListener("scroll", () => {
    const footerPos = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (footerPos < windowHeight - 100) {
      footer.classList.add("visible");
    }
  });
});