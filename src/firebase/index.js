import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0YmC4d3zcANdgq9EeC1rif_xpl4MTVNg',
  authDomain: 'tiki-c5f76.firebaseapp.com',
  projectId: 'tiki-c5f76',
  storageBucket: 'tiki-c5f76.appspot.com',
  messagingSenderId: '539804474867',
  appId: '1:539804474867:web:9188343232dad3e58f8686',
  measurementId: 'G-X2HFGHBNGK',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const authentication = getAuth(app);
