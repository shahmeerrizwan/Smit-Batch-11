// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        try {
            const productDoc = doc(db, "Products", productId);
            const docSnap = await getDoc(productDoc);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const productDetail = document.getElementById('product-detail');
                productDetail.innerHTML = `
                    <img src="${data.Image}" alt="${data.Title}">
                    <h3>${data.Title}</h3>
                    <p>${data.Description}</p>
                    <p>$${data.Price}</p>
                    <p>${data.Condition}</p>
                    <p>${data.PhoneNumber}</p>
                    <p>${data.Location}</p>
                    <p>${data.Brand}</p>
                    <p>Category: ${data.Category}</p>
                `;
            } else {
                console.log("No such document!");
                document.getElementById('product-detail').innerText = 'Product not found.';
            }
        } catch (error) {
            console.error("Error fetching product details: ", error);
            document.getElementById('product-detail').innerText = 'Error fetching product details.';
        }
    } else {
        document.getElementById('product-detail').innerText = 'No product ID found in URL.';
    }
}

loadProductDetails();