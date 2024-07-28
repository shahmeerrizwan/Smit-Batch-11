// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Your web app's Firebase configuration
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

// SIGNUP FUNCTION 
const register = async () => {
    let email = document.getElementById("signEmail").value;
    let password = document.getElementById("signPassword").value;
    let fullName = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    try {
        Swal.fire({
            title: "Processing...",
            text: "Signing in...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        await createUserWithEmailAndPassword(auth, email, password);
        //ADD DATA TO FIRESTORE FIREBASE
        await addDoc(collection(db, "Users Data"), {
            Name: fullName,
            Email: email,
            Age: age
        });
        document.getElementById("signEmail").value = ''
        document.getElementById("signPassword").value = ''
        document.getElementById("name").value = ''
        document.getElementById("age").value = ''
        await Swal.fire({
            title: "Success!",
            text: "User Registered Successfully",
            icon: "success",
        });
        await Swal.fire({
            text: "Go & Login With Email",
            icon: "success",
        });
        localStorage.clear();
        window.location.href = 'index.html'

    } catch (error) {
        const errorCode = error.code;
        let errorMessage;

        switch (errorCode) {
            case 'auth/email-already-in-use':
                errorMessage = "Email is already in use by another account.";
                break;
            case 'auth/invalid-email':
                errorMessage = "The email address is not valid.";
                break;
            case 'auth/weak-password':
                errorMessage = "The password is too weak. It should be at least 6 characters long.";
                break;
            case 'auth/user-disabled':
                errorMessage = "The user account has been disabled by an administrator.";
                break;
            case 'auth/user-not-found':
                errorMessage = "There is no user record corresponding to this email.";
                break;
            case 'auth/wrong-password':
                errorMessage = "The password is invalid or the user does not have a password.";
                break;
            case 'auth/too-many-requests':
                errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
                break;
            case 'auth/operation-not-allowed':
                errorMessage = "This operation is not allowed. Please enable the relevant authentication method in your Firebase console.";
                break;
            case 'auth/network-request-failed':
                errorMessage = "A network error occurred. Please check your internet connection and try again.";
                break;
            default:
                errorMessage = "An unknown error occurred. Please try again.";
                break;
        }
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
            footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
        });
    }
}

document.getElementById("signUpButton").addEventListener("click", register);

const signIn = async () => {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passLogin").value;
    if (password.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Invalid Password",
            text: "Password must be at least 6 characters long.",
        });
        return;
    }
    try {
        Swal.fire({
            title: "Processing...",
            text: "Signing in...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        await signInWithEmailAndPassword(auth, email, password);
        localStorage.clear();
        await Swal.fire({
            title: "Success!",
            text: "User Signed In Successfully",
            icon: "success",

        });
        localStorage.clear();
        window.location.href = 'dashboard.html'
    } catch (error) {
        console.log('Error object:', error);

        let errorMessage = "";

        switch (error.code) {
            case 'auth/invalid-email':
                errorMessage = "Invalid email format.";
                break;
            case 'auth/user-disabled':
                errorMessage = "This user has been disabled.";
                break;
            case 'auth/user-not-found':
                errorMessage = "No user found with this email.";
                break;
            case 'auth/wrong-password':
                errorMessage = "Incorrect password.";
                break;
            case 'auth/too-many-requests':
                errorMessage = "Too many unsuccessful login attempts. Please try again later.";
                break;
            case 'auth/network-request-failed':
                errorMessage = "Network error. Please check your internet connection.";
                break;
            case 'auth/operation-not-allowed':
                errorMessage = "Email/password login is not enabled.";
                break;
            case 'auth/invalid-credential':
                errorMessage = "Email is not Register.";
                break;
            default:
                console.log('Unhandled error code:', error.code);
                errorMessage = "An unknown error occurred.";
                break;
        }

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errorMessage,
            footer: `<a href="https://firebase.google.com/docs/auth/admin/errors" target='_blank'>Why do I have this issue?</a>`,
        });
    }
}

document.getElementById("LoginButton").addEventListener("click", signIn);





