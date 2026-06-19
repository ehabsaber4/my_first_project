document.getElementById("loginForm").addEventListener("submit", function(event) {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
        return;
    }

    alert("Login successful!");
});