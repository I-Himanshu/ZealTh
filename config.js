// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdhmNhkomDFetCCU_YW-LrFLXTdFPcs3I",
  authDomain: "zealth-4.firebaseapp.com",
  projectId: "zealth-4",
  storageBucket: "zealth-4.appspot.com",
  messagingSenderId: "749463136880",
  appId: "1:749463136880:web:773a831ba3577da9e422b5",
  measurementId: "G-DF7JXH3410",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
