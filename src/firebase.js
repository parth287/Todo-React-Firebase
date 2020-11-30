import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
    {
        // firebase db config
      });

const db = firebaseApp.firestore();
// https://todo-list-reactfire-5402a.web.app/
export default db;
