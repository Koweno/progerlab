document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".accordion-title");

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // Toggle show class
      content.classList.toggle("show");

      // Adjust max height for smooth transition
      if (content.classList.contains("show")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
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
  document
    .querySelectorAll("p, h1, h2, h3, h5, h6")
    .forEach(function (element) {
      element.classList.toggle("dark-style-color");
    });
  document.getElementById("login-page").classList.toggle("btn-outline-light");
  document.getElementById("login-page").classList.toggle("btn-outline-dark");
  document.getElementById("profile-page").classList.toggle("btn-outline-light");
  document.getElementById("profile-page").classList.toggle("btn-outline-dark");

  if (
    document.getElementById("login-page").classList.contains("btn-outline-dark")
  ) {
    document.getElementById("login-page").style.color = "black";
  } else {
    document.getElementById("login-page").style.color = "white";
  }
  let nav = document.querySelector("nav");
  if (nav.classList.contains("navbar-dark")) {
    nav.classList.remove("navbar-dark", "bg-dark");
    nav.classList.add("navbar-light", "bg-light");
  } else {
    nav.classList.remove("navbar-light", "bg-light");
    nav.classList.add("navbar-dark", "bg-dark");
  }

  document.getElementById("courseSelect").classList.toggle("bg-dark");
  document.getElementById("courseSelect").classList.toggle("text-light");

  document.getElementById("lessonFilter").classList.toggle("bg-dark");
  document.getElementById("lessonFilter").classList.toggle("text-light");

  document.getElementById("submit-reg").classList.toggle("btn-dark");

  document.querySelectorAll(".form-control").forEach(function (element) {
    element.classList.toggle("bg-dark");
    element.classList.toggle("text-light");
  });
  document.querySelectorAll(".accordion-title").forEach(function (element) {
    element.classList.toggle("dark-style-color");
  });
  document.querySelector(".highlight").classList.toggle("light-red");

  document.querySelectorAll(".bad-paragraphs").forEach(function (element) {
    element.classList.toggle("text-light");
  });

  document.querySelectorAll(".accordion-item").forEach(function (element) {
    element.classList.toggle("bg-dark");
  });
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
  let PP = "2";
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

const notificationSound = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/472198703/preview.mp3"
);
function playSound() {
  notificationSound.play();
}
document.getElementById("submit-reg").addEventListener("click", playSound);

document.addEventListener("DOMContentLoaded", function () {
  const lessonFilter = document.getElementById("lessonFilter");
  const topicItems = document.querySelectorAll(".topic-list li");

  // Загружаем сохранённый фильтр из localStorage
  const savedFilter = localStorage.getItem("selectedLesson");
  if (savedFilter) {
    lessonFilter.value = savedFilter;
    filterTopics(savedFilter);
  }

  // Обработчик события для изменения фильтра
  lessonFilter.addEventListener("change", function () {
    const selectedLesson = lessonFilter.value;
    localStorage.setItem("selectedLesson", selectedLesson);
    filterTopics(selectedLesson);
  });

  function filterTopics(lesson) {
    topicItems.forEach((item) => {
      if (lesson === "all" || item.getAttribute("data-category") === lesson) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  }
});

const ussss = localStorage.getItem("User_logged");
if (ussss == "1") {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("profile-page").style.display = "flex";
}
