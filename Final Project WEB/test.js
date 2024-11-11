document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const logoutButton = document.getElementById('logout-button');
    const welcomeMessage = document.getElementById('welcome-message');
  
    // Check if user is logged in
    const username = localStorage.getItem('username');
    if (username) {
      showWelcome(username);
    }
  
    // Login function
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const usernameInput = document.getElementById('username').value;
      if (usernameInput) {
        localStorage.setItem('username', usernameInput);
        showWelcome(usernameInput);
      }
    });
  
    // Logout function
    logoutButton.addEventListener('click', function () {
      localStorage.removeItem('username');
      showLogin();
    });
  
    function showWelcome(username) {
      welcomeMessage.textContent = `Welcome, ${username}`;
      loginForm.style.display = 'none';
      logoutButton.style.display = 'block';
    }
  
    function showLogin() {
      welcomeMessage.textContent = 'Welcome';
      loginForm.style.display = 'block';
      logoutButton.style.display = 'none';
    }
  });
  