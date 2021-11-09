import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import SignIn from "./pages/SignIn";
import ProductsList from "./pages/ProductsList";

const firebaseConfig = {
  apiKey: "AIzaSyDiF8NG4zuKKfQDthETMo1ykP52-dXvrPQ",
  authDomain: "viafirma-products.firebaseapp.com",
  projectId: "viafirma-products",
  storageBucket: "viafirma-products.appspot.com",
  messagingSenderId: "220773733231",
  appId: "1:220773733231:web:bf2fbecf9883946f3c0e9a",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    return unsuscribe;
  }, [initializing]);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return "Loading ...";

  return (
    <>
      {user ? (
        <ProductsList signOut={signOut} />
      ) : (
        <SignIn signInWithGoogle={signInWithGoogle} />
      )}
    </>
  );
}

export default App;
