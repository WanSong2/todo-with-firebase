import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBwPR5fMDiAKcJdjjcj2IF2EzKtnFnouIY",
    authDomain: "todo-with-firebase-18dcd.firebaseapp.com",
    databaseURL: "https://todo-with-firebase-18dcd.firebaseio.com",
    projectId: "todo-with-firebase-18dcd",
    storageBucket: "todo-with-firebase-18dcd.appspot.com",
    messagingSenderId: "756507204585",
    appId: "1:756507204585:web:6c52fa8fe8c820f5188978",
    measurementId: "G-Z6R1DPJEBJ"
};

firebase.initializeApp(config);
const firestore = new firebase.firestore();

export { firestore }