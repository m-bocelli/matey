// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBTfFVWAWdDwH4K3EjaiYl6NJOH2N0OhC4',
    authDomain: 'budgeteers.firebaseapp.com',
    databaseURL: 'https://budgeteers-default-rtdb.firebaseio.com',
    projectId: 'budgeteers',
    storageBucket: 'budgeteers.appspot.com',
    messagingSenderId: '610654498031',
    appId: '1:610654498031:web:6a754f4d3313b49723ff1a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
