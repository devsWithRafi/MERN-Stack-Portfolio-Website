import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBi_pRboupceEZv1bG_cHUEsqs5j_YKgCI',
    authDomain: 'fir-project-867ab.firebaseapp.com',
    projectId: 'fir-project-867ab',
    storageBucket: 'fir-project-867ab.firebasestorage.app',
    messagingSenderId: '679016426378',
    appId: '1:679016426378:web:3165a4e0b9432e0545b673',
    //     measurementId: 'G-1909X9SEZ5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
