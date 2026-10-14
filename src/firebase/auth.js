
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

// Create a new account with email and password
export async function signUpWithEmail(name, email, password) {
  const result = await createUserWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  if (name.trim()) {
    await updateProfile(result.user, {
      displayName: name.trim()
    });
  }

  return result.user;
}

// Sign in with an existing email/password account
export async function signInWithEmail(email, password) {
  await setAuthPersistence();

  const result = await signInWithEmailAndPassword(
    auth,
    email.trim(),
    password
  );

  return result.user;
}

// Sign in with Google
export async function signInWithGoogle() {
  await setAuthPersistence();

  const result = await signInWithPopup(auth, googleProvider);

  return result.user;
}

// Reset password
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email.trim());
}

// Log out
export async function logOut() {
  await signOut(auth);
}
