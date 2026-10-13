
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from 'firebase/auth';

import { auth, setAuthPersistence } from './config';

const googleProvider = new GoogleAuthProvider();

export async function signUpWithEmail(name, email, password) {
  const result = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(result.user, {
    displayName: name
  });

  return result.user;
}

export async function signInWithEmail(email, password, rememberMe = true) {
  await setAuthPersistence(rememberMe);

  const result = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return result.user;
}

export async function signInWithGoogle(rememberMe = true) {
  await setAuthPersistence(rememberMe);

  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
}

export async function resetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export async function logOut() {
  return signOut(auth);
}
