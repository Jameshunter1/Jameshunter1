const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClbqfwzJmRHAumV2VEf_EhUYiYHrNnluU",
  authDomain: "graphic-perigee-325911.firebaseapp.com",
  projectId: "graphic-perigee-325911",
  storageBucket: "graphic-perigee-325911.appspot.com",
  messagingSenderId: "1066729493262",
  appId: "1:1066729493262:web:50125cc88a9e8dc9ba3d5f",
  measurementId: "G-VW0DMQSEGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
