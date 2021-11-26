import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAi2Nqu-2PXdU5Fut4N3fJk3wJQmF0PLPA",
  authDomain: "thrive-cms-deff4.firebaseapp.com",
  projectId: "thrive-cms-deff4",
  storageBucket: "thrive-cms-deff4.appspot.com",
  messagingSenderId: "229652158993",
  appId: "1:229652158993:web:b28753d4495c98ea0e6fb0",
  measurementId: "G-9JP83HRLPB"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default firebase