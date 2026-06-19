document.getElementById("signupForm").addEventListener("submit", function(event) {

    let fullname = document.getElementById("fullname").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (fullname.length < 3) {
        alert("Full name must be at least 3 characters.");
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    alert("Account created successfully!");
});