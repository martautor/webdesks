import { initializeApp } from "firebase/app";
import {
    getAuth
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDlCYwbDdVZnHWXdoS2uvvTExIwQXHm8Lo",
  authDomain: "autorshtrih.firebaseapp.com",
  databaseURL: "https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autorshtrih",
  storageBucket: "autorshtrih.appspot.com",
  messagingSenderId: "743948289274",
  appId: "1:743948289274:web:4acf72028bc1f9991cf543"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)