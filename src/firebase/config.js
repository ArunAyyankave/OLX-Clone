import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCWxD-7-uVePEGA8K25ArTBvxj4AuCbZ1U",
  authDomain: "olxclone-ca663.firebaseapp.com",
  projectId: "olxclone-ca663",
  storageBucket: "olxclone-ca663.appspot.com",
  messagingSenderId: "72846730534",
  appId: "1:72846730534:web:5fb1f9ffa8df71f9df4de7",
  measurementId: "G-6SRV7RYHF9"
};

export default firebase.initializeApp(firebaseConfig);