import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxyiyDZboZLc2Uwx3StZiHQ1uoWzmMnFc",
  authDomain: "nwitter-f1001.firebaseapp.com",
  projectId: "nwitter-f1001",
  storageBucket: "nwitter-f1001.appspot.com",
  messagingSenderId: "6740069524",
  appId: "1:6740069524:web:89e377d4b3db832c3ef881",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
