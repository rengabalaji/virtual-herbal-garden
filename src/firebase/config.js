
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, browserSessionPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwE3Vaeo4Pr8rYccstheTm6eQ9cz7Im00",
  authDomain: "virtual-herbal-garden-35c66.firebaseapp.com",
  projectId: "virtual-herbal-garden-35c66",
  storageBucket: "virtual-herbal-garden-35c66.firebasestorage.app",
  messagingSenderId: "1082106528410",
  appId: "1:1082106528410:web:9592a1f7350b2fad75d523"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const setAuthPersistence = (rememberMe) =>
  setPersistence(
    auth,
    rememberMe ? browserLocalPersistence : browserSessionPersistence
  );

export default app;
