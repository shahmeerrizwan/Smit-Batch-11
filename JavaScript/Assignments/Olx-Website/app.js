function profile() {
    document.getElementById("profile").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closeProfile() {
    document.getElementById("profile").style.display = "none";
    document.body.classList.remove("no-scroll");
}

function goToCategory() {
    window.location.href = 'category.html'
}

function goToDashboard() {
    window.location.href = 'dashboard.html'
}

///

function toggleDropdown() {
    var dropdown = document.getElementById("user-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
    if (!event.target.matches('.user-icon, .user-icon *')) {
        var dropdown = document.getElementById("user-dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}

function viewProfile() {
    // Handle profile viewing logic here
    alert("Redirecting to profile page...");
}
