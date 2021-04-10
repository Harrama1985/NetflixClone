import { firebaseConfig } from './config';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
