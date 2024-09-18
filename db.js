import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe7K1f_Scwd3VbjHlQiIWcIdsmYNW_njU",
    authDomain: "student-9d207.firebaseapp.com",
    projectId: "student-9d207",
    storageBucket: "student-9d207.appspot.com",
    messagingSenderId: "648695961895",
    appId: "1:648695961895:web:add0b5f439123d1b34b102"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { app, firestore };
