// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFYvfizAhd0rvbzXZ2pZmzJ76s7_Km51k",
    authDomain: "raiyan-auto-warehouse.firebaseapp.com",
    projectId: "raiyan-auto-warehouse",
    storageBucket: "raiyan-auto-warehouse.appspot.com",
    messagingSenderId: "879333487971",
    appId: "1:879333487971:web:7be5bc693e61af4bc48f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

