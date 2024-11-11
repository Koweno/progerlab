// signup form
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("emailError").textContent = "";
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("passwordConfirmError").textContent = "";

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let valid = true;

    if (email.trim() === "") {
      document.getElementById("emailError").textContent =
        "Email must not be empty!!!";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("emailError").textContent =
        "Incorrect email format!";
      valid = false;
    }

    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Length of the password must be greater than 7!!!";
      valid = false;
    } else if (!/\d/.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must contain at least one digit!!!";
      valid = false;
    } else if (!/[@.!*?_,#$%^&-+]/.test(password)) {
      document.getElementById("passwordError").textContent =
        "Password must contain at least one special character from [@.!*?_,#$%^&-+]";
      valid = false;
    }
    if (confirmPassword != password) {
      document.getElementById("passwordConfirmError").textContent =
        "Passwords don't match!!!";
      valid = false;
    }

    if (valid) {
      alert("Форма успешно отправлена!");
      localStorage.setItem('user_email', email); // Save email to localStorage
      localStorage.setItem('user_password', password); // save password to
      localStorage.setItem('user_username', username); // save password to
      window.location.replace("index.html");
    }
  });
}
