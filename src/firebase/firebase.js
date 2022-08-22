import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2AYdozZdwOkvGidtOlNXzbuGMyZIRxb8",
  authDomain: "shoeracks-7fe41.firebaseapp.com",
  projectId: "shoeracks-7fe41",
  storageBucket: "shoeracks-7fe41.appspot.com",
  messagingSenderId: "307652094076",
  appId: "1:307652094076:web:ca0d9169ab63811fb141f9",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const db = getFirestore();
export const createUser = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const date = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        date,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating a user", error.message);
    }
  }
  return userDocRef;
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
