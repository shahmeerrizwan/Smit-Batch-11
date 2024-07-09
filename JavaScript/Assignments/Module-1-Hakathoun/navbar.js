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

document.addEventListener("DOMContentLoaded", function () {
    var modals = {
        "signupAdminModal": {
            modal: document.getElementById("signupAdminModal"),
            isOpen: false
        },
        "loginAdminModal": {
            modal: document.getElementById("loginAdminModal"),
            isOpen: false
        },
        "signupUserModal": {
            modal: document.getElementById("signupUserModal"),
            isOpen: false
        },
        "loginUserModal": {
            modal: document.getElementById("loginUserModal"),
            isOpen: false
        }
    };

    var modalKeys = Object.keys(modals);

    function openModal(modalId) {
        if (modals[modalId].isOpen) {
            return;
        }

        modalKeys.forEach(function (key) {
            if (key !== modalId && modals[key].isOpen) {
                closeModal(key);
            }
        });

        var modal = modals[modalId].modal;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        modals[modalId].isOpen = true;
        localStorage.setItem(modalId, "open");
    }

    function closeModal(modalId) {
        if (!modals[modalId].isOpen) {
            return;
        }

        var modal = modals[modalId].modal;
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        modals[modalId].isOpen = false;
        localStorage.removeItem(modalId);
    }

    modalKeys.forEach(function (key) {
        var modalState = localStorage.getItem(key);
        if (modalState === "open") {
            openModal(key);
        }
    });

    var openSignupAdminBtn = document.getElementById("openSignupAdminModal");
    var openLoginAdminBtn = document.getElementById("openLoginAdminModal");
    var openSignupUserBtn = document.getElementById("openSignupUserModal");
    var openLoginUserBtn = document.getElementById("openLoginUserModal");

    openSignupAdminBtn.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("signupAdminModal");
    });

    openLoginAdminBtn.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("loginAdminModal");
    });

    openSignupUserBtn.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("signupUserModal");
    });

    openLoginUserBtn.addEventListener("click", function (event) {
        event.preventDefault();
        openModal("loginUserModal");
    });

    var closeButtons = document.querySelectorAll(".modal .close");
    closeButtons.forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            var modalId = this.closest(".modal").id;
            closeModal(modalId);
        });
    });

    modalKeys.forEach(function (key) {
        var modal = modals[key].modal;
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                event.stopPropagation();
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modalKeys.forEach(function (key) {
                if (modals[key].isOpen) {
                    closeModal(key);
                }
            });
        }
    });
});