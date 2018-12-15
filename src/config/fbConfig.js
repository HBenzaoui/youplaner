import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCf3QQZJl5Tf9VLGudW_Z9XEMXi-7_XSDA",
  authDomain: "youplaner.firebaseapp.com",
  databaseURL: "https://youplaner.firebaseio.com",
  projectId: "youplaner",
  storageBucket: "youplaner.appspot.com",
  messagingSenderId: "153493096346"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;