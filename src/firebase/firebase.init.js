import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUifjjgJfR8vQKwMutCRXsGA-AwyYteEA",
  authDomain: "assignment-9-86b90.firebaseapp.com",
  projectId: "assignment-9-86b90",
  storageBucket: "assignment-9-86b90.appspot.com",
  messagingSenderId: "38683935415",
  appId: "1:38683935415:web:cd7c8edfed1f88dab70332"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;