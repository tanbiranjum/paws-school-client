import { createContext } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    providerLogin,
    createUserWithEmail,
    signInWithEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
