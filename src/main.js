import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'

// FireBase 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for FireBase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { 
	getFirestore, 
	collection, 
	getDocs } from 'firebase/firestore/lite';

// your web app's firebase configuration

const FIREBASE_CONFIG = {
	apiKey: "AIzaSyC73oVAbqSAWb6iMbB_bdr_sXUNAdb0qyQ",
	authDomain: "lang-exchange-2a4fc.firebaseapp.com",
	projectId: "lang-exchange-2a4fc",
	storageBucket: "lang-exchange-2a4fc.appspot.com",
	messagingSenderId: "264989986369",
	appId: "1:264989986369:web:5fb5c160b0e4565baa00c0"
};

// initialize firebase
const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);
const DB = getFirestore(FIREBASE_APP);

// collection reference
const COL_REF = collection(DB, 'users')

// get collection data
getDocs(COL_REF)
	.then((snapshot) => {
		let users = [];
		snapshot.docs.forEach((doc) => {
			users.push({ ...doc.data(), id: doc.id })
		})
		console.log(users);
	})
	.catch((error) => {
		alert(error.message);
		console.log(`ERROR: ${error.code}`);
	})

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

const APP = createApp(App);

APP.use(router);

APP.mount('#app')