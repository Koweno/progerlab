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
  document.getElementById("login-page").classList.toggle("btn-outline-light");
  document.getElementById("login-page").classList.toggle("btn-outline-dark");
  document.getElementById("profile-page").classList.toggle("btn-outline-light");
  document.getElementById("profile-page").classList.toggle("btn-outline-dark");

  document.querySelector(".highlight").classList.toggle("light-red");
  document.querySelectorAll(".soc-icons").forEach(function (element) {
    element.classList.toggle("inverted-img");
  });
  document.querySelector(".star-message").classList.toggle("dark-style-color");

  document.querySelectorAll(".card-body").forEach((element) => {
    element.classList.toggle("dark-bg");
  });
  document.querySelectorAll(".card-text").forEach((element) => {
    element.classList.toggle("dark-style-color");
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

const stars = document.querySelectorAll(".star");
const message = document.querySelector(".star-message");

// Функция для обновления звезд в зависимости от рейтинга
function updateStars(rating) {
  stars.forEach((star) => star.classList.remove("selected"));
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
  message.textContent = `Your rate for our course ${rating} star${
    rating > 1 ? "s" : ""
  }`;

  // Отображение анимации и звука
  document.getElementById("rate-sound").play();
  if (rating > 1) {
    document.getElementById("lottie").style.display = "block";
  } else {
    document.getElementById("lottie").style.display = "none";
  }

  // Сохраняем рейтинг в Local Storage
  localStorage.setItem("courseRating", rating);
}

// Слушаем события клика по звездами
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    updateStars(rating);
  });
});

// Проверяем, есть ли сохраненный рейтинг в Local Storage
const savedRating = localStorage.getItem("courseRating");
if (savedRating) {
  // Если есть, обновляем звезды
  updateStars(savedRating);
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
if (ussss == "1") {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("profile-page").style.display = "flex";
}
