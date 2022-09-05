import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2AYdozZdwOkvGidtOlNXzbuGMyZIRxb8",
  authDomain: "shoeracks-7fe41.firebaseapp.com",
  projectId: "shoeracks-7fe41",
  storageBucket: "shoeracks-7fe41.appspot.com",
  messagingSenderId: "307652094076",
  appId: "1:307652094076:web:ca0d9169ab63811fb141f9",
};

const firebaseApp = initializeApp(firebaseConfig);

export const database = getDatabase(firebaseApp);
