import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDimM7zIl90wq9LhApDmsa4Z1UF4_IMu9g",
  authDomain: "neoportfolioapp.firebaseapp.com",
  projectId: "neoportfolioapp",
  storageBucket: "neoportfolioapp.appspot.com",
  messagingSenderId: "1057805547124",
  appId: "1:1057805547124:web:74c931ec524a06c3b14321"
};


const app = initializeApp(firebaseConfig);
const database = getAuth(app);
const provider = new GoogleAuthProvider();
export {database,provider};