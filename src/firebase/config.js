import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// For Firebase JS SDK v9.0.0 and later
const firebaseConfig = {
    apiKey: "AIzaSyCX-FPNbbXCuFppKcYih5TxvADi6ipR8kM",
    authDomain: "fir-d80ce.firebaseapp.com",
    projectId: "fir-d80ce",
    storageBucket: "fir-d80ce.appspot.com",
    messagingSenderId: "1072731959063",
    appId: "1:1072731959063:web:f83931f4695d30636bd152",
    measurementId: "G-NY2WK0J0B2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db,app };
