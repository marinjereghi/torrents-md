// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD6sZFCeLOWfbqHtAvWvZsJXUxsBDSs1qU",

    authDomain: "torrents-md.firebaseapp.com",

    projectId: "torrents-md",

    storageBucket: "torrents-md.appspot.com",

    messagingSenderId: "904857534823",

    appId: "1:904857534823:web:2e91237c54c1c1360a6fc2",

    measurementId: "G-Q96DTMSP9D"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth();
export const db = getFirestore()
