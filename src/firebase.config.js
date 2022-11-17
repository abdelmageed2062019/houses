import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv-zjQS6AZ2QFa9UTpgH3l97lHCs6YF7M",
  authDomain: "house-marketplace-app-23bcc.firebaseapp.com",
  projectId: "house-marketplace-app-23bcc",
  storageBucket: "house-marketplace-app-23bcc.appspot.com",
  messagingSenderId: "70179878411",
  appId: "1:70179878411:web:b14bbc2daed355b65b790e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
