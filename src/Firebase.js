import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7bpb8DwhlIJ8x8HM6VNUWW9n6bQ87IN0",
  authDomain: "phototag-71585.firebaseapp.com",
  projectId: "phototag-71585",
  storageBucket: "phototag-71585.appspot.com",
  messagingSenderId: "191189330550",
  appId: "1:191189330550:web:33a8a318496bf17f974d57",
  measurementId: "G-M4VD7EVDL2",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
