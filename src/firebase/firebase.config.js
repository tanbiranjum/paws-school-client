import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyB3ck28hABzb3uPf-89mLwJl-9UgvTFBp8",
  authDomain: "paws-school.firebaseapp.com",
  projectId: "paws-school",
  storageBucket: "paws-school.appspot.com",
  messagingSenderId: "19043123965",
  appId: "1:19043123965:web:924fe5816d62aa5317b494",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
