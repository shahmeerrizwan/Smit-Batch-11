import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZx2BB9f1MIoRcIAyqO2coUuSpfEEpQyw",
    authDomain: "expertizo-class.firebaseapp.com",
    databaseURL: "https://expertizo-class-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "expertizo-class",
    storageBucket: "expertizo-class.appspot.com",
    messagingSenderId: "409223184847",
    appId: "1:409223184847:web:a7ca5d1752ba47f9ba52ba",
    measurementId: "G-LVF3VP0M8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to display user data on the browser

const displayUserData = (userName) => {
    document.getElementById("userName").innerText = userName || 'N/A';
};

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const usersCollection = collection(db, "Users Data");
            const q = query(usersCollection, where('Email', '==', user.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                const userName = userData.Name || 'N/A';
                displayUserData(userName);
            } else {
                console.log("No such document!");
                document.getElementById("userName").innerText = 'N/A';
            }

        } catch (error) {
            console.error("Error fetching user document: ", error);
            document.getElementById("userName").innerText = 'Error fetching data';
        }

    } else {
        console.log("No user is currently signed in.");
        document.getElementById("userName").innerText = 'No user signed in';
    }
});


const logout = async () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You will be logged out of your account.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, log me out!",
        cancelButtonText: "No, stay logged in",
        reverseButtons: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                await signOut(auth);
                localStorage.clear();
                swalWithBootstrapButtons.fire(
                    "Logged Out!",
                    "You have been logged out.",
                    "success"
                ).then(() => {
                    window.location.href = "index.html";
                });
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while logging out. Please try again.",
                });
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                "Cancelled",
                "You are still logged in.",
                "info"
            ).then(() => {
                localStorage.clear();
                window.location.href = "dashboard.html";
            });
        }
    });
};

document.getElementById("logoutButton").addEventListener("click", logout);

