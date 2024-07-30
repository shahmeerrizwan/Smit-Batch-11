import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { collection, query, orderBy, startAt, endAt, getDocs, getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Firebase configuration and initialization
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

// Search functionality
document.getElementById('searchField').addEventListener('input', async function () {
    const queryValue = this.value.trim().toLowerCase();

    if (queryValue) {
        try {
            const productsRef = collection(db, 'Products');
            const q = query(
                productsRef,
                orderBy('Title'),
                startAt(queryValue),
                endAt(queryValue + '\uf8ff')
            );
            const querySnapshot = await getDocs(q);

            // Clear previous results
            const resultsContainer = document.getElementById('results');
            resultsContainer.innerHTML = '';

            if (querySnapshot.empty) {
                resultsContainer.innerHTML = '<p>No matching documents found.</p>';
            } else {
                querySnapshot.forEach(doc => {
                    const data = doc.data();
                    const itemDiv = document.createElement('div');
                    itemDiv.textContent = `${data.Title} - ${data.Description}`;
                    resultsContainer.appendChild(itemDiv);
                });
            }
        } catch (err) {
            console.error('Error getting documents:', err);
            document.getElementById('results').innerHTML = '<p>Error retrieving search results.</p>';
        }
    } else {
        // Clear the results if the query is empty
        document.getElementById('results').innerHTML = '';
    }
});
