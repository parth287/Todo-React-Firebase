import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCBwfa9OEPkrrwysR9OiTVBNc4qO2OyKmk",
        authDomain: "todo-list-reactfire-5402a.firebaseapp.com",
        databaseURL: "https://todo-list-reactfire-5402a.firebaseio.com",
        projectId: "todo-list-reactfire-5402a",
        storageBucket: "todo-list-reactfire-5402a.appspot.com",
        messagingSenderId: "785976258124",
        appId: "1:785976258124:web:19347a89d1017824770ee9",
        measurementId: "G-HZEHWFDJ5Y"
      });

const db = firebaseApp.firestore();

export default db;
