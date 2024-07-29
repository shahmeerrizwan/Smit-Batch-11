// Function to close all modals
function closeAllModals() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signUp").style.display = "none";
    document.getElementById("email").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

// Function to open the login modal
function openLogin() {
    closeAllModals();
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

// Function to close the login modal
function closeLogin() {
    document.getElementById("login").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

// Function to open the sign-up modal
function createAccountPage() {
    closeAllModals();
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "signUp");
}

// Function to close the sign-up modal
function closeSignUp() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

// Function to switch from sign-up to login modal
function backToLogin() {
    closeAllModals();
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

// Function to open the email login modal
function emailLogin() {
    closeAllModals();
    document.getElementById("email").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "email");
}

// Function to close the email login modal
function closeEmail() {
    document.getElementById("email").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

function checkModalState() {
    const modalType = localStorage.getItem("modalType");
    switch (modalType) {
        case "login":
            openLogin();
            break;
        case "signUp":
            createAccountPage();
            break;
        case "email":
            emailLogin();
            break;
        default:
            closeAllModals();
            break;
    }
}

document.addEventListener("DOMContentLoaded", checkModalState);




//Error Message 

function errorMessage() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Use Another Method",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}