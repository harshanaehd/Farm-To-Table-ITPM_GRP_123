import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyDeqALLVkjvq-4r8Cp8gme1M9PN8SqetcU",
    authDomain: "farmtotable-9da76.firebaseapp.com",
    projectId: "farmtotable-9da76",
    storageBucket: "farmtotable-9da76.appspot.com",
    messagingSenderId: "863644970132",
    appId: "1:863644970132:web:3ae8cba68ac8cfcf735881",
    measurementId: "G-Q1EWMDF0TD"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;