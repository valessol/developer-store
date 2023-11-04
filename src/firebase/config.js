import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Base de datos
export const getFirestoreDB = () => {
  return getFirestore(app);
};

// Colecciones
export const getCollection = async (col) => {
  const dbCollection = collection(db, col);
  const snapshot = await getDocs(dbCollection);
  return snapshot.docs.map((doc) => doc.data());
};

//Login con email y contraseña
export const getAuthentication = () => {
  return getAuth(app);
};

//Login con Google
export const provider = new GoogleAuthProvider();
