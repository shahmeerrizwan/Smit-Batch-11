function openLogin() {
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

function createAccountPage() {
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "signUp");
}

function closeSignUp() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

function backToLogin() {
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("email").style.display = "none";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

function emailLogin() {
    document.getElementById("email").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "email");
}

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
            break;
    }
}

document.addEventListener("DOMContentLoaded", checkModalState);
