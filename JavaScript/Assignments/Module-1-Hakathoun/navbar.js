const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");


searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", (e) => {
    let clickedElm = e.target;

    if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu")
    ) {
        nav.classList.remove("active");
    }
});

//

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");

    function setActiveLink() {
        navLinks.forEach((link) => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                this.classList.add("active");
                const linkId = this.getAttribute("id");
                localStorage.setItem("activeNavLink", linkId);
            });
        });

        const activeLinkId = localStorage.getItem("activeNavLink");
        if (activeLinkId) {
            const activeLink = document.getElementById(activeLinkId);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    }

    setActiveLink();
});


// SIGNUP MODAL 


document.addEventListener("DOMContentLoaded", function () {
    var openSignup = document.getElementById("openSignup");
    var modal = document.getElementById("myModal");
    var closeButton = modal.getElementsByClassName("close")[0];

    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modalOpen", "true");
    }

    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("modalOpen");
    }

    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    openSignup.onclick = function () {
        showModal();
    }
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation();
    }
});


// Login As Admin


document.addEventListener("DOMContentLoaded", function () {
    var loginAsAdmin = document.getElementById("loginAsAdmin");
    var modal = document.getElementById("myModal3");
    var closeButton = modal.getElementsByClassName("close")[0];
    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modalOpen", "true");
    }
    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("modalOpen");
    }
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    loginAsAdmin.onclick = function () {
        showModal();
    }
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation();
    }
});

// Singup As User

document.addEventListener("DOMContentLoaded", function () {
    var signupAsUser = document.getElementById("signupAsUser");
    var modal = document.getElementById("myModal2");
    var closeButton = modal.getElementsByClassName("close")[0];
    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modalOpen", "true");
    }
    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("modalOpen");
    }
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    signupAsUser.onclick = function () {
        showModal();
    }
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation();
    }
});



// Singup As User

document.addEventListener("DOMContentLoaded", function () {
    var userLogin = document.getElementById("userLogin");
    var modal = document.getElementById("myModal4");
    var closeButton = modal.getElementsByClassName("close")[0];
    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        localStorage.setItem("modalOpen", "true");
    }
    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        localStorage.removeItem("modalOpen");
    }
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    userLogin.onclick = function () {
        showModal();
    }
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation();
    }
});


