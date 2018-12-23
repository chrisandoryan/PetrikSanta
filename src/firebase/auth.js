import { authInstance } from './firebase';

export const doSignUp = (email, password) =>
  authInstance.createUserWithEmailAndPassword(email, password);

export const doSignIn = (email, password) =>
  authInstance.signInWithEmailAndPassword(email, password);

export const doSignOut = () => authInstance.signOut();

export const doPasswordReset = email =>
authInstance.sendPasswordResetEmail(email);