// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('enviroment variable', import.meta.env.VITE_PASS)
const firebaseConfig = {
  apiKey: "AIzaSyCbwNZav0vZUB54gE99AtewnHp7-WqgOlU",
  authDomain: "chef-by-nature-client.firebaseapp.com",
  projectId: "chef-by-nature-client",
  storageBucket: "chef-by-nature-client.appspot.com",
  messagingSenderId: "318930677091",
  appId: "1:318930677091:web:f4f971f0c8755b0cd0f756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;