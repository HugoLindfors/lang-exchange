import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './main.css'

const app2 = createApp(App)

app2.use(router)

app2.mount('#app')

// FireBase 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for FireBase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥