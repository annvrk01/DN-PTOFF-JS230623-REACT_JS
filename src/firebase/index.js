import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

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
const analytics = getAnalytics(app);

export const storage = getStorage(app);
