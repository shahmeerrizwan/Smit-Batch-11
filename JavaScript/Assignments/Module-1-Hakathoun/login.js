// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();
const dbref = ref(db)


let emailInp = document.getElementById("s-emailinp");
let passInp = document.getElementById("s-passinp");
let mainForm = document.getElementById("mainform-3")


let signInUser = e => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailInp.value, passInp.value)
        .then((credential) => {
            get(child(dbref, 'User' + credential.user.uid))
                .then((snapshot) => {
                    if (snapshot.exists) {
                        sessionStorage.setItem("User-Info", JSON.stringify({
                            firstname: snapshot.val().firstname,
                            lastname: snapshot.val().lastname
                        }))
                        sessionStorage.setItem("user-crendentials", JSON.stringify(credential.user));
                        window.location.href = "home.html"
                    }
                })
            console.log(credential);
        }).catch(() => {
            alert(error.message)
            console.log("error to send data")
        })
}

mainForm.addEventListener('submit', signInUser);