import firebase from 'firebase';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBTnhewGQt08R0VgNinTG553hggCOg_IU8",
  authDomain: "petriksanta.firebaseapp.com",
  databaseURL: "https://petriksanta.firebaseio.com",
  projectId: "petriksanta",
  storageBucket: "petriksanta.appspot.com",
  messagingSenderId: "114116729263"
};

firebase.initializeApp(config);

const authInstance = firebase.auth();
const firestoreInstance = firebase.firestore();

export { authInstance, firestoreInstance };