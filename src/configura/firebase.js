
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA510qz0gJkTou8qgfZnpMbQzX1OZdkS_s",
    authDomain: "firestore-redux-todo-list.firebaseapp.com",
    projectId: "firestore-redux-todo-list",
    storageBucket: "firestore-redux-todo-list.appspot.com",
    messagingSenderId: "506177357715",
    appId: "1:506177357715:web:7a8b7622e1991c3a7d8a66",
    measurementId: "G-4RG64PQ7HH"
};

firebase.initializeApp(firebaseConfig)
export default firebase