// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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

async function loadProducts() {
    const productsCollection = collection(db, "Products");
    const querySnapshot = await getDocs(productsCollection);

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    querySnapshot.forEach(async (doc) => {
        const data = doc.data();
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
         <div className="containerr" key={id} >
              <div className="card">
                <img src=${data.image} alt={title} />
                <div className="card-body">
                  <div className="row">
                    <div className="card-title">
                      <h4>${data.Title}</h4>
                      <h3>${data.Price}</h3>
                    </div>
                    <div className="view-btn" data-id="${doc.id}">
                      View Details
                    </div>
                  </div>
                  <hr />
                  <p>{description}</p>
                  <div className="btnn-group">
                    <div className="btnn" data-id="${doc.id}">
                      Buy Now
                    </div>
                    <a to="/">Cancel</a>
                  </div>
                </div>
              </div>
            </div>
        `;
        productList.appendChild(card);
    });
}

loadProducts();

// Handle button click
document.getElementById('product-list').addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('card-button')) {
        const productId = event.target.getAttribute('data-id');
        window.location.href = `detail.html?id=${productId}`;
    }
});