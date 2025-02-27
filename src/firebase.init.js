// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlc4BMyrzo5nrJ757zWu7uZybjWCvDHrs",
  authDomain: "emergency-service-7ec5c.firebaseapp.com",
  projectId: "emergency-service-7ec5c",
  storageBucket: "emergency-service-7ec5c.appspot.com",
  messagingSenderId: "490866797266",
  appId: "1:490866797266:web:ea7a3b6fb55dd7f1331b0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;