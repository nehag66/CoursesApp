import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCtBcXi6iQTxrBErdt7U__HpCYuxiOLcSo",
  authDomain: "coursesminip.firebaseapp.com",
  projectId: "coursesminip",
  storageBucket: "coursesminip.appspot.com",
  messagingSenderId: "1095194178047",
  appId: "1:1095194178047:web:f3ddabc5b9df45a97637ca",
  measurementId: "G-ZTZ429WLJT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
