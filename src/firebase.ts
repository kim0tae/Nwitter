import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzenlRt5fv-vjOx9u-N0fXgTym9IpsLrg",
  authDomain: "nwitter-e10f0.firebaseapp.com",
  projectId: "nwitter-e10f0",
  storageBucket: "nwitter-e10f0.appspot.com",
  messagingSenderId: "989325993058",
  appId: "1:989325993058:web:4c2bf20785017ad58c9d3b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
