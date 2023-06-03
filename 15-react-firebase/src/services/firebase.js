import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

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

export const getMessages = (fn) => {
  const messagesRef = ref(database, 'messages');

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.toJSON();
    // wywolujemy funkcje callback z danymi z bazy
    // * ten patern uzywany jest wtedy, kiedy funkcja jest niepromisowa

    fn(Object.values(data));
  });
}

export const saveMessage = newMessage => {
  const messagesRef = ref(database, 'messages');
  push(messagesRef, newMessage)
}