function openLogin() {
    document.getElementById("login").style.display = "flex";
    document.getElementById("modal-overlay").style.display = "block";
    document.body.classList.add("no-scroll");
    localStorage.setItem("isModalOpen", "true");
}

function closeLogin() {
    document.getElementById("login").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
    localStorage.setItem("isModalOpen", "false");
}

function checkModalState() {
    if (localStorage.getItem("isModalOpen") === "true") {
        openLogin();
    }
}

document.addEventListener("DOMContentLoaded", checkModalState);