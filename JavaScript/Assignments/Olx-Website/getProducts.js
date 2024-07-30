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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadProducts() {
  // Show loading spinner
  Swal.fire({
    title: "Loading Products...",
    text: "Please wait ",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    const productsCollection = collection(db, "Products");
    const querySnapshot = await getDocs(productsCollection);

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const docId = doc.id;
      const timestamp = data.Timestamp;

      let formattedDate = "No Date Available";

      if (timestamp) {
        if (timestamp.toDate) {
          // Firestore Timestamp
          formattedDate = formatDate(timestamp.toDate());
        } else if (timestamp instanceof Date) {
          // Regular JavaScript Date
          formattedDate = formatDate(timestamp);
        } else if (typeof timestamp === 'string') {
          // If it's a string, parse it into a Date
          const parsedDate = new Date(timestamp);
          if (!isNaN(parsedDate.getTime())) {
            formattedDate = formatDate(parsedDate);
          }
        }
      }

      const card = document.createElement('div');
      card.className = 'cardd';
      card.innerHTML = `
       <div class="cardd" >
   <div class="img__featured">
     <img class="m_shah" src="${data.Image}" alt="">
       <p class="featured">featured</p>
   </div>
   <div class="card__content">
     <div class="card__content-gap" >
       <div class="name__heart" >
         <h4>${data.Title.slice(0, 30)}...</h4>
         <i class="fa-solid fa-heart"></i>
       </div>
       <h2>Rs ${data.Price}</h2>
     </div>
     <h5>${data.Location}</h5>
     <h6>${formattedDate}</h6>
     <button class="view-btn" data-id="${doc.id}">Go To Detailed</button>
   </div>
 </div>
      `;
      productList.appendChild(card);
    });

    // Close SweetAlert loading
    Swal.close();
  } catch (error) {
    console.error("Error loading products:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong while loading products!'
    });
  }
}

function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}

loadProducts();

document.getElementById('product-list').addEventListener('click', (event) => {
  const target = event.target;
  if (target) {
    const productId = target.getAttribute('data-id');
    if (target.classList.contains('view-btn')) {
      // View Details Button
      window.location.href = `detail.html?id=${productId}`;
    }
  }
});

