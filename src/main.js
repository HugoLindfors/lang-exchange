import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'

// FireBase 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for FireBase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC73oVAbqSAWb6iMbB_bdr_sXUNAdb0qyQ",
  authDomain: "lang-exchange-2a4fc.firebaseapp.com",
  projectId: "lang-exchange-2a4fc",
  storageBucket: "lang-exchange-2a4fc.appspot.com",
  messagingSenderId: "264989986369",
  appId: "1:264989986369:web:5fb5c160b0e4565baa00c0"
};

// Initialize FireBase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

const app = createApp(App);

app.use(router);

app.mount('#app')

export const store = reactive({
  users: [
      
  ],
})