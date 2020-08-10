import firebase from 'firebase';

export function register(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function logout() {
  return firebase.auth().signOut();
}
