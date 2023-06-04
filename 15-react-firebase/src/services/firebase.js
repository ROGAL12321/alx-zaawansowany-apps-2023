import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile as updateProfileFromFB
} from "firebase/auth";
import { getStorage, uploadBytes, ref as imageRef, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArOAH0-hg8429fUGpC8Ysoz_S8Bf76_HE",
  authDomain: "myalxproject-b0878.firebaseapp.com",
  projectId: "myalxproject-b0878",
  storageBucket: "myalxproject-b0878.appspot.com",
  messagingSenderId: "233330719835",
  appId: "1:233330719835:web:a0c80da7bb122be645137e",
  databaseURL: "https://myalxproject-b0878-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const storage = getStorage(app);

export const getMessages = (fn) => {
  const messagesRef = ref(database, 'messages');

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.toJSON();
    // wywolujemy funkcje callback z danymi z bazy
    // * ten patern uzywany jest wtedy, kiedy funkcja jest niepromisowa

    fn(data ? Object.values(data) : []);
  });
}

export const saveMessage = newMessage => {
  const messagesRef = ref(database, 'messages');
  push(messagesRef, newMessage)
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// funkcja typu callback
export const getUser = (fn) => {
  onAuthStateChanged(auth, user => {
    fn(user);
  })
}

export const logout = () => {
  return signOut(auth);
}

export const updateProfile = (file, fileName, displayName) => {
  const storageRef = imageRef(storage, `avatars/${fileName}`);

  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(imageRef(storage, `avatars/${fileName}`))
    })
    .then(url => {
      return updateProfileFromFB(auth.currentUser, {
        displayName: displayName,
        photoURL: url
      })
    })
    .catch((error) => console.log(error));
}