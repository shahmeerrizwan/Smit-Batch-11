import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, getDoc, doc, addDoc, getDocs, collection, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
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

const pathName = window.location.pathname
onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userDoc = await getDoc(doc(db, "Users Data", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            displayUserData(userData);
        } else {
            console.log("No such document!");
        }
        const data = document.getElementById("userEmail1")
        if (data) {
            data.innerText = user.email || 'N/A';
        }

    } else {
        window.location.href = 'index.html';
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User not found ",
        });
        console.log("No user is currently signed in.");
    }
});

console.log(pathName);


async function addDataToFireStore() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();
    const condition = document.getElementById('condition').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const location = document.getElementById('location').value.trim();
    const brand = document.getElementById('brand').value.trim();
    const imageFile = document.getElementById('image').files[0];
    const year = document.getElementById('yes').value

    const categoryData = JSON.parse(localStorage.getItem('selectedCategory'));
    const category = categoryData ? categoryData.name : '';

    const user = auth.currentUser;
    const userEmail = user ? user.email : null;

    if (!title || !price || !description || !imageFile || !brand || !condition || !phoneNumber || !location || !category || !userEmail || !year) {
        Swal.fire("Validation Error", "All fields are required.", "warning");
        return;
    }

    try {
        Swal.fire({
            title: "Processing...",
            text: "Adding Product...",
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => Swal.showLoading(),
        });

        // Upload the file to Firebase Storage with a timestamp to avoid filename conflicts
        const timestamp = Timestamp.now();
        const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
        const snapshot = await uploadBytes(storageRef, imageFile);

        // Get the URL of the uploaded file
        const imageUrl = await getDownloadURL(snapshot.ref);

        // Fetch the user's data from Firestore
        const usersCollection = collection(db, 'Users Data');
        const q = query(usersCollection, where('Email', '==', userEmail));
        const querySnapshot = await getDocs(q);

        let Name = '';

        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            Name = userData.Name || '';
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not found in Firestore.",
            });
            console.error("User not found in Firestore.");
            return;
        }

        // Add the document to Firestore with timestamp metadata
        const docRef = await addDoc(collection(db, "Products"), {
            Title: title,
            Description: description,
            Price: price,
            Condition: condition,
            PhoneNumber: phoneNumber,
            Location: location,
            Brand: brand,
            Category: category,
            Image: imageUrl,
            UserEmail: userEmail,
            Name: Name,
            Year: year,
            Timestamp: timestamp // Store timestamp in Firestore
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
        window.location.href = 'category.html'
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
        });
        console.error("Error adding document: ", error);
    }
}

let clicked = document.getElementById("addDataToFireStore")

if (clicked) {
    clicked.addEventListener("click", addDataToFireStore);
}
