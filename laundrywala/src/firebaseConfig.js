// // firebaseConfig.js
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA54SpqCtE7_WW2zRd4WJ7f3p3atW5jhr4",
//   authDomain: "laundry-4c005.firebaseapp.com",
//   projectId: "laundry-4c005",
//   storageBucket: "laundry-4c005.appspot.com",
//   messagingSenderId: "65939894031",
//   appId: "1:65939894031:web:d8b5257ba251d357b9587a",
//   measurementId: "G-7ZP2PVZ1C6"
// };

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA54SpqCtE7_WW2zRd4WJ7f3p3atW5jhr4",
    authDomain: "laundry-4c005.firebaseapp.com",
    projectId: "laundry-4c005",
    storageBucket: "laundry-4c005.appspot.com",
    messagingSenderId: "65939894031",
    appId: "1:65939894031:web:d8b5257ba251d357b9587a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
