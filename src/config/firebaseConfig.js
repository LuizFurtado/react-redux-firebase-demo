import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBVMeG5cZVRvhGzllV2BMwgmNJpKTbgfHA",
    authDomain: "react-redux-marioplan-64a64.firebaseapp.com",
    databaseURL: "https://react-redux-marioplan-64a64.firebaseio.com",
    projectId: "react-redux-marioplan-64a64",
    storageBucket: "react-redux-marioplan-64a64.appspot.com",
    messagingSenderId: "626776056003",
    appId: "1:626776056003:web:f15fbc4785e7ad67b88276",
    measurementId: "G-BGSDK2JNPF"
  };

  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;