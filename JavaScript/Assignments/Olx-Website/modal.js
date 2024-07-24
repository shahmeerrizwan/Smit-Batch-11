function openLogin() {
    closeModals(); // Close any open modals first
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
    hideModalOverlayIfNoModalsOpen();
}

function createAccountPage() {
    closeModals(); // Close any open modals first
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "signUp");
}

function closeSignUp() {
    document.getElementById("signUp").style.display = "none";
    hideModalOverlayIfNoModalsOpen();
}

function backToLogin() {
    closeModals(); // Close any open modals first
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("email").style.display = "none"; // Ensure email modal is hidden
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "login");
}

function emailLogin() {
    closeModals(); // Close any open modals first
    document.getElementById("email").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("modalType", "email");
}

function closeEmail() {
    document.getElementById("email").style.display = "none";
    hideModalOverlayIfNoModalsOpen();
}

function closeModals() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.removeItem("modalType");
}

function hideModalOverlayIfNoModalsOpen() {
    const modals = document.querySelectorAll(".modal");
    let anyModalOpen = false;
    modals.forEach(modal => {
        if (modal.style.display === "flex") {
            anyModalOpen = true;
        }
    });
    if (!anyModalOpen) {
        document.getElementById("modal-overlay").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
}

function checkModalState() {
    const modalType = localStorage.getItem("modalType");
    if (modalType === "login") {
        openLogin();
    } else if (modalType === "signUp") {
        createAccountPage();
    } else if (modalType === "email") {
        emailLogin();
    }
}

document.addEventListener("DOMContentLoaded", checkModalState);
