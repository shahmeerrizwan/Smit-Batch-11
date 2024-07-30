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

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

async function loadProductDetails() {
    Swal.fire({
        title: "Loading Products...",
        text: "Please wait ",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');



    if (productId) {
        try {
            const productDoc = doc(db, "Products", productId);
            const docSnap = await getDoc(productDoc);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const timestamp = data.Timestamp;
                let formattedDate = "No Date Available";

                if (timestamp) {
                    if (timestamp.toDate) {
                        formattedDate = formatDate(timestamp.toDate());
                    } else if (timestamp instanceof Date) {
                        formattedDate = formatDate(timestamp);
                    } else if (typeof timestamp === 'string') {
                        const parsedDate = new Date(timestamp);
                        if (!isNaN(parsedDate.getTime())) {
                            formattedDate = formatDate(parsedDate);
                        }
                    }
                }
                const productDetail = document.getElementById('product-detail');
                productDetail.innerHTML = `
                    
<div class="productDetails">
      <div class="left__side">
        <img
          id="main"
          src=${data.Image}
          alt="    "
        />
        <div class="price__location_card">
          <h1 id="price">Rs ${data.Price}</h1>
          <h3 id="productName">${data.Title}</h3>
          <p id="location">
            <i class="fa-solid fa-location-dot"></i>${data.Location}
          </p>
        </div>
        <div class="_2961c394" aria-label="Details">
          <div class="_5eb397e5">Details</div>
          <div class="a9c966f1 undefined">
            <div class="_92439ac7">
              <div class="_9a8eacd9"><span>Make</span><span>${data.Brand}</span></div>
            </div>
            <div class="_92439ac7">
              <div class="_9a8eacd9"><span>Model</span><span>Latest</span></div>
            </div>
            <div class="_92439ac7">
              <div class="_9a8eacd9">
                <span>Body Type</span><span>${data.Condition}</span>
              </div>
            </div>
            
            <div class="_92439ac7">
              <div class="_9a8eacd9">
                <span>Color</span><span>Original</span>
              </div>
            </div>
          
            <div class="_92439ac7">
              <div class="_9a8eacd9">
                <span>Registration city</span><span>${data.Location}</span>
              </div>
            </div>
           
            <div class="_92439ac7">
              <div class="_9a8eacd9">
                <span>Year</span><span>${data.Year}</span>
              </div>
            </div>
             <div class="_92439ac7 full-width">
              <div class="_9a8eacd9 ">
                <span>Add Post At : ${formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="descriptionn">
          <h1>Description</h1>
          <p id="description">${data.Description}</p>
        </div>
        
      </div>
      <div class="right__side">
        <div class="profile_contact_card">
          <div class="avaar">
            <img src="./Assets/avatar.png" id="image" alt="" />
            <div class="img">
              <h5 id="phoneL">${data.PhoneNumber}</h5>
              <p id="nameL">${data.Name}</p>
              <p class="e-d">${data.UserEmail}</p>
            </div>
          </div>
          <button class="num-color">
            <i class="fa-solid fa-phone"></i> ${data.PhoneNumber}
          </button>
          <button class="chat">
            <i class="fa-solid fa-comments"></i> Chat
          </button>
        </div>
        <div class="description">
          <h1>Loaction</h1>
          <p id="description2">
            <i class="fa-solid fa-location-dot"></i> ${data.Location}
          </p>
        </div>
        <div class="right-img">
         <img src="./Assets/add5.png" alt="">
        </div>
      </div>
    </div>

                `;
                Swal.close();
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