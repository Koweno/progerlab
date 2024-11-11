document.querySelectorAll(".bad-paragraphs").forEach(function (element) {
  element.classList.toggle("light-style-color");
});
function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    changeColor();
  }
});
function changeColor() {
  document.getElementById("body").classList.toggle("dark-style");
  document.getElementById("box").classList.toggle("dark-style");
  document.querySelectorAll("a").forEach(function (element) {
    element.classList.toggle("dark-style");
  });
  document.querySelectorAll("h1, h2, h3, h5, h6").forEach(function (element) {
    element.classList.toggle("dark-style-color");
  });
  document.querySelectorAll("h4").forEach(function (element) {
    element.classList.toggle("light-style-color");
  });
  document.getElementById("login-link").classList.toggle("btn-outline-light");
  document.getElementById("login-link").classList.toggle("btn-outline-dark");
  if (
    document.getElementById("login-link").classList.contains("btn-outline-dark")
  ) {
    document.getElementById("login-link").style.color = "black";
  } else {
    document.getElementById("login-link").style.color = "white";
  }
  document.querySelectorAll(".soc-icons").forEach(function (element) {
    element.classList.toggle("inverted-img");
  });
  let nav = document.querySelector("nav");
  if (nav.classList.contains("navbar-dark")) {
    nav.classList.remove("navbar-dark", "bg-dark");
    nav.classList.add("navbar-light", "bg-light");
  } else {
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "bg-dark");
  }
  if (document.getElementById("body").classList.contains("dark-style")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

document.getElementById("change-bg").onclick = changeColor;

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
    navigateToPagewithActions(event.key);
  }
});

function navigateToPagewithActions(key) {
  const pageMap = {
    1: "index.html",
    2: "About Course.html",
    3: "Teachers.html",
    4: "Students.html",
    5: "About Us.html",
    6: "login.html",
  };
  let PP = "5";
  if (key == "ArrowRight") {
    PP++;
  }
  if (key == "ArrowLeft") {
    PP--;
  }
  if (pageMap[PP]) {
    window.location.href = pageMap[PP];
  }
}


const ussss = localStorage.getItem("User_logged");
if (ussss=="1"){
    document.getElementById("login-page").style.display = "none";
    document.getElementById("profile-page").style.display = "flex";
}