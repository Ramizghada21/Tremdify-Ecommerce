import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";  

const firebaseConfig = {
  apiKey: "AIzaSyC50W4TLHx2ScAVZKz0Ye_m-S6ufOmrm7U",
  authDomain: "myecommerce-e0857.firebaseapp.com",
  projectId: "myecommerce-e0857",
  storageBucket: "myecommerce-e0857.firebasestorage.app",
  messagingSenderId: "146112736258",
  appId: "1:146112736258:web:319020e87ff93384410b1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);

export {fireDb,auth}