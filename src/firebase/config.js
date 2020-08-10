import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOkOPfoBxYW7jIR99DjCyQK2Ojd15Lpss',
  authDomain: 'motoshop-9f649.firebaseapp.com',
  databaseURL: 'https://motoshop-9f649.firebaseio.com',
  projectId: 'motoshop-9f649',
  storageBucket: 'motoshop-9f649.appspot.com',
  messagingSenderId: '617970897838',
  appId: '1:617970897838:web:e09cd47b936e4447466e3f',
  measurementId: 'G-QEVPYGFM2R',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
