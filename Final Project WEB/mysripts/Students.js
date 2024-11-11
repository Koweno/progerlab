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
  document.querySelectorAll("p, h1, h2, h5, h6").forEach(function (element) {
    element.classList.toggle("dark-style-color");
  });
  document.querySelectorAll("h3").forEach(function (element) {
    element.classList.toggle("light-style-color");
  });

  document.querySelectorAll("p").forEach(function (element) {
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
  let PP = "4";
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

const studentsProfile1 = {
  students: [
    {
      name: "Sayat",
      score: 122,
      img: "https://plus.unsplash.com/premium_photo-1661774991416-ee14a1bc0d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmElMjBtYW58ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Sansyzbay Yerassyl",
      score: 118,
      img: "https://wallpapercave.com/wp/wp2126141.jpg",
    },
    {
      name: "Sansyzbay Yerassyl",
      score: 118,
      img: "https://wallpapercave.com/wp/wp2126141.jpg",
    },
  ],

  addStudentsInfo(infoDiv) {
    this.students.forEach((student) => {
      console.log(`Task ${student.name}: ${student.score}`);
      infoDiv.insertAdjacentHTML(
        "beforeend",
        `
          <div class="row">
            <div class="col-12 col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <article class="result-item">
                <h3 class="student-name">${student.name}</h3>
                <p class="student-score">Score: ${student.score}</p>
              </article>
            </div>
            <div class="col-12 col-md-8">
              <img
                class="img-fluid fixed-size"
                src="${student.img}"
                alt="${student.name}"
              />
            </div>
          </div>
        `
      );
    });
  },
};

const infoDiv = document.getElementById("students-info");
studentsProfile1.addStudentsInfo(infoDiv);

const heading = document.getElementById("h2-an");
const image = document.getElementById("img-an");
image.onclick = function () {
  heading.classList.toggle("active");
};


const ussss = localStorage.getItem("User_logged");
if (ussss=="1"){
    document.getElementById("login-page").style.display = "none";
    document.getElementById("profile-page").style.display = "flex";
}