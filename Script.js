
alert("Welcome to English With Soraia!");

document.getElementById("welcome-title").textContent =
    "Learn English With Confidence!!";

const joinButton = document.getElementById("join-btn");

joinButton.addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const userName = document.getElementById("name").value.trim();
    const userEmail = document.getElementById("email").value.trim();

    const message = document.getElementById("form-message");

    if (userName === "") {

        message.textContent = "Please enter your name!";
        message.style.color = "red";

    } else if (userEmail === "") {

        message.textContent = "Please enter your email!";
        message.style.color = "red";

    } else if (!userEmail.includes("@") || !userEmail.includes(".")) {

        message.textContent = "Please enter a valid email!";
        message.className = "form-message error";

    } else {

        message.textContent = "Welcome " + userName + "! Registration successful.";
        message.className = "form-message success";
registerForm.reset();

    }

});
