let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Perform validation and login logic here
      // Example: You can use fetch() to send a POST request to the server for authentication
      // Once authenticated, you can redirect the user to a different page
      // For the sake of simplicity, let's just log the values for now
      console.log("Username:", username);
      console.log("Password:", password);
  });
});
