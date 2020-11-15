import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';
const firebaseConfig = {
  apiKey: 'AIzaSyAm6XPmLO-x51AQL1iqjqBCn1eRmb21qz4',
  authDomain: 'netflix-clone-8013b.firebaseapp.com',
  databaseURL: 'https://netflix-clone-8013b.firebaseio.com',
  projectId: 'netflix-clone-8013b',
  storageBucket: 'netflix-clone-8013b.appspot.com',
  messagingSenderId: '333836230372',
  appId: '1:333836230372:web:3d48e04426ad86065ad6f1',
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

//hadi seedDatabase katekhdem marra wehda bach les donne li fi seed.js mithatouch bezeef lmarat fi data

//seedDatabase(firebase);
export { firebase };
