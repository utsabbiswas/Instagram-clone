// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALkw5n93Mvgn2xmV2_2xYoCHQJ5HZi52k",
    authDomain: "instagram-clone-6a932.firebaseapp.com",
    projectId: "instagram-clone-6a932",
    storageBucket: "instagram-clone-6a932.appspot.com",
    messagingSenderId: "500613162669",
    appId: "1:500613162669:web:fdfd9f304077a15f85c824",
    measurementId: "G-W69FCDF9X2"
  });

  const db=firebase.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();
  
  export { db, auth, storage };