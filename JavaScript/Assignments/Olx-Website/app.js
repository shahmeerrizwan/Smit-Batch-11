function openLogin() {
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login"); // Set which modal is open
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType"); // Remove the modalType key
}

function createAccountPage() {
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "signUp"); // Set which modal is open
}

function closeSignUp() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType"); // Remove the modalType key
}

function backToLogin() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    localStorage.setItem("modalType", "login"); // Set which modal is open
}

function checkModalState() {
    const modalType = localStorage.getItem("modalType");
    if (modalType === "login") {
        openLogin();
    } else if (modalType === "signUp") {
        createAccountPage();
    }
}

document.addEventListener("DOMContentLoaded", checkModalState);
