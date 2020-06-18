import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBcx3Ite8q3WvtP7yU0Z0H0OsJeeDhCBVg',
  authDomain: 'endava-anniversary.firebaseapp.com',
  databaseURL: "https://endava-anniversary.firebaseio.com",
  projectId: "endava-anniversary",
  storageBucket: "endava-anniversary.appspot.com",
  messagingSenderId: "633761913350",
  appId: "1:633761913350:web:c2581f761ee3383dabc187"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export  {
  storage,
  firebase as default
};

