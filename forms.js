// Validate sign-up form
document.querySelector("form").addEventListener("submit", function (event) {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    event.preventDefault(); // Stop form submission
  }
});
