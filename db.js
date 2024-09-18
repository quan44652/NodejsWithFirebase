import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // apiKey: "AIzaSyDmK1Oblxm3gWA1afO56PwIn5rap8MXjko",
    // authDomain: "nodejswithfirebase-f7e84.firebaseapp.com",
    // projectId: "nodejswithfirebase-f7e84",
    // databaseURL: "nodejswithfirebase-f7e84",
    // storageBucket: "nodejswithfirebase-f7e84.appspot.com",
    // messagingSenderId: "379109634626",
    // appId: "1:379109634626:web:4a92979cef03da18a8f3db",
    // measurementId: "G-TMSFD47B8B"

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
