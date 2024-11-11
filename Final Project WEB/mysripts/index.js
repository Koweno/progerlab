// Dark mode . Light mode

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "dark") {
    changeColor();
  }
  document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
  });
});

function changeColor() {
  document.getElementById("body").classList.toggle("dark-style");
  document.getElementById("box").classList.toggle("dark-style");
  document.getElementById("popupCont").classList.toggle("dark-style");
  document.getElementById("popupForm").classList.toggle("light-bg");
  document.getElementById("close").classList.toggle("light-style");
  document.querySelectorAll("a").forEach(function (element) {
    element.classList.toggle("dark-style");
  });
  document.querySelectorAll(".soc-icons").forEach(function (element) {
    element.classList.toggle("inverted-img");
  });
  document
    .querySelectorAll("p, h1, h2, h3, h5, h6")
    .forEach(function (element) {
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

// Contact us popup function

function showPopup() {
  document.getElementById("popupForm").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popupForm").style.display = "none";
}

document.getElementById("popupBtn").onclick = showPopup;

document.querySelector(".close").onclick = hidePopup;

window.onclick = function (event) {
  if (event.target == document.getElementById("popupForm")) {
    hidePopup();
  }
};

const stars = document.querySelectorAll(".star");
const message = document.querySelector(".star-message");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    stars.forEach((star) => star.classList.remove("selected"));

    for (let i = 0; i < rating; i++) {
      stars[i].classList.add("selected");
    }

    message.textContent = `Your rate for our course ${rating} star${
      rating > 1 ? "s" : ""
    }`;

    document.getElementById("rate-sound").play();
    if (rating > 1) {
      document.getElementById("lottie").style.display = "block";
    } else {
      document.getElementById("lottie").style.display = "none";
    }
  });
});


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
  let PP = "1";
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

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);




const FormE777 = document.getElementById("contactForm");

FormE777.addEventListener("submit", () => {
  // event.preventDefault();
  const formData = new FormData(FormE777);
  const data = new URLSearchParams(formData);
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  alert("Success");
});

const ussss = localStorage.getItem("User_logged");
if (ussss=="1"){
    document.getElementById("login-page").style.display = "none";
    document.getElementById("profile-page").style.display = "flex";
}

