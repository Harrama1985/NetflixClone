
import {firebaseConfig} from './config'
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import { seedDatabase } from '../seed';


// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

//hadi seedDatabase katekhdem marra wehda bach les donne li fi seed.js mithatouch bezeef lmarat fi data

//seedDatabase(firebase);
export { firebase };
