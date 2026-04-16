import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2uxw3EkpmOsEI9E6EAAYRN7uWXGwxDYk",
  authDomain: "crown-colthing-db.firebaseapp.com",
  projectId: "crown-colthing-db",
  storageBucket: "crown-colthing-db.firebasestorage.app",
  messagingSenderId: "187553095324",
  appId: "1:187553095324:web:0dc219541abdf7aca15759"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


//for authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


//for database
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.error("error creating the user", error);
        }
    }

    return userDocRef;
}