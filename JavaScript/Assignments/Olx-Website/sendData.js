import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, getDoc, doc, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

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
const storage = getStorage(app);

// Function to display user data on the browser
const displayUserData = (userData) => {
    document.getElementById("userEmail1").innerText = userData.Email || 'N/A';
};
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userDoc = await getDoc(doc(db, "Users Data", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            displayUserData(userData);
        } else {
            console.log("No such document!");
        }

        document.getElementById("userEmail1").innerText = user.email || 'N/A';

    } else {
        console.log("No user is currently signed in.");
    }
});










async function addDataToFireStore() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let condition = document.getElementById('condition').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let location = document.getElementById('location').value;
    let brand = document.getElementById('brand').value;
    let imageFile = document.getElementById('image').files[0];

    // Get the category from localStorage
    let categoryData = JSON.parse(localStorage.getItem('selectedCategory'));
    let category = categoryData ? categoryData.name : '';

    if (!title || !price || !description || !imageFile || !brand || !condition || !phoneNumber || !location || !category) {
        Swal.fire("Validation Error", "All fields are required.", "warning");
        return;
    }

    try {
        Swal.fire({
            title: "Processing...",
            text: "Sending Data ...",
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        // Upload the file to Firebase Storage
        const storageRef = ref(storage, `images/${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);

        // Get the URL of the uploaded file
        const imageUrl = await getDownloadURL(snapshot.ref);

        // Add the document to Firestore
        const docRef = await addDoc(collection(db, "Products"), {
            Title: title,
            Description: description,
            Price: price,
            Condition: condition,
            PhoneNumber: phoneNumber,
            Location: location,
            Brand: brand,
            Category: category,
            Image: imageUrl
        });

        console.log("Document written with ID: ", docRef.id);

        await Swal.fire({
            icon: "success",
            title: "Product Added Successfully!",
            showConfirmButton: false,
            timer: 1500
        });

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        document.getElementById('price').value = '';
        document.getElementById('condition').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('location').value = '';
        document.getElementById('brand').value = '';
        document.getElementById('image').value = '';
        document.getElementById('yes').value = '';




    } catch (error) {
        console.error("Error adding document: ", error);

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
    }
}

document.getElementById("addDataToFireStore").addEventListener("click", addDataToFireStore);
