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
  if (localStorage.getItem("User_logged") == 1) {
    login();
  }
  document.getElementById("logout-linkFP").onclick = logoutfunc;
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
  document.getElementById("login-page").classList.toggle("btn-outline-light");
  document.getElementById("login-page").classList.toggle("btn-outline-dark");
  document.querySelectorAll(".ao").forEach(function (element) {
    element.classList.toggle("aboba");
  });
  document.getElementById("profile-page").classList.toggle("btn-outline-light");
  document.getElementById("profile-page").classList.toggle("btn-outline-dark");
  document.getElementById("profile").classList.toggle("dark-bg");

  if (
    document.getElementById("login-page").classList.contains("btn-outline-dark")
  ) {
    document.getElementById("login-page").style.color = "black";
  } else {
    document.getElementById("login-page").style.color = "white";
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

const now = new Date();
const hour = now.getHours();
let greeting;
if (hour >= 6 && hour < 12) {
  greeting = "Good Morning!";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

const emailname = localStorage.getItem("user_username");
document.getElementById("profile_name").textContent =
  greeting + " " + emailname;

document.getElementById("logoutFP-link").onclick = logoutfunc;

function logoutfunc() {
  localStorage.setItem("User_logged", 0);

  document.getElementById("login-link").style.display = "flex";
  document.getElementById("profile-link").style.display = "none";
}

const ussss = localStorage.getItem("User_logged");
if (ussss == "1") {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("profile-page").style.display = "flex";
}
