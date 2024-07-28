function profile() {
    document.getElementById("profile").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closeProfile() {
    document.getElementById("profile").style.display = "none";
    document.body.classList.remove("no-scroll");
}

