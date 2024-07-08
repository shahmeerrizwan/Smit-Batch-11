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
    // Get the open modal text element
    var openSignup = document.getElementById("openSignup");

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the close button
    var closeButton = modal.getElementsByClassName("close")[0];

    // Function to show the modal
    function showModal() {
        modal.style.display = "block";
        // Disable scrolling on the body
        document.body.style.overflow = "hidden";
        // Store modal state in localStorage
        localStorage.setItem("modalOpen", "true");
    }

    // Function to hide the modal
    function hideModal() {
        modal.style.display = "none";
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
        // Remove modal state from localStorage
        localStorage.removeItem("modalOpen");
    }

    // Check localStorage on page load to decide whether to show the modal
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }

    // When the user clicks the text, open the modal
    openSignup.onclick = function () {
        showModal();
    }

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation(); // Prevent the event from bubbling up
    }



});


// Login As Admin


document.addEventListener("DOMContentLoaded", function () {
    // Get the open modal text element
    var loginAsAdmin = document.getElementById("loginAsAdmin");
    // Get the modal
    var modal = document.getElementById("myModal3");
    // Get the close button
    var closeButton = modal.getElementsByClassName("close")[0];
    // Function to show the modal
    function showModal() {
        modal.style.display = "block";
        // Disable scrolling on the body
        document.body.style.overflow = "hidden";
        // Store modal state in localStorage
        localStorage.setItem("modalOpen", "true");
    }
    // Function to hide the modal
    function hideModal() {
        modal.style.display = "none";
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
        // Remove modal state from localStorage
        localStorage.removeItem("modalOpen");
    }
    // Check localStorage on page load to decide whether to show the modal
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    // When the user clicks the text, open the modal
    loginAsAdmin.onclick = function () {
        showModal();
    }
    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation(); // Prevent the event from bubbling up
    }
});

// Singup As User

document.addEventListener("DOMContentLoaded", function () {
    // Get the open modal text element
    var signupAsUser = document.getElementById("signupAsUser");
    // Get the modal
    var modal = document.getElementById("myModal2");
    // Get the close button
    var closeButton = modal.getElementsByClassName("close")[0];
    // Function to show the modal
    function showModal() {
        modal.style.display = "block";
        // Disable scrolling on the body
        document.body.style.overflow = "hidden";
        // Store modal state in localStorage
        localStorage.setItem("modalOpen", "true");
    }
    // Function to hide the modal
    function hideModal() {
        modal.style.display = "none";
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
        // Remove modal state from localStorage
        localStorage.removeItem("modalOpen");
    }
    // Check localStorage on page load to decide whether to show the modal
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    // When the user clicks the text, open the modal
    signupAsUser.onclick = function () {
        showModal();
    }
    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation(); // Prevent the event from bubbling up
    }
});



// Singup As User

document.addEventListener("DOMContentLoaded", function () {
    // Get the open modal text element
    var userLogin = document.getElementById("userLogin");
    // Get the modal
    var modal = document.getElementById("myModal4");
    // Get the close button
    var closeButton = modal.getElementsByClassName("close")[0];
    // Function to show the modal
    function showModal() {
        modal.style.display = "block";
        // Disable scrolling on the body
        document.body.style.overflow = "hidden";
        // Store modal state in localStorage
        localStorage.setItem("modalOpen", "true");
    }
    // Function to hide the modal
    function hideModal() {
        modal.style.display = "none";
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
        // Remove modal state from localStorage
        localStorage.removeItem("modalOpen");
    }
    // Check localStorage on page load to decide whether to show the modal
    var isModalOpen = localStorage.getItem("modalOpen");
    if (isModalOpen) {
        showModal();
    }
    // When the user clicks the text, open the modal
    userLogin.onclick = function () {
        showModal();
    }
    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function (event) {
        hideModal();
        event.stopPropagation(); // Prevent the event from bubbling up
    }
});


