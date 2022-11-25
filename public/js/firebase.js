import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";

const firebaseConfig = {
	apiKey: "AIzaSyBNJfiIZuZDQDUbpvuket5tZaj6RIZQqyc",
	authDomain: "appnewsnetwork-174cd.firebaseapp.com",
	projectId: "appnewsnetwork-174cd",
	storageBucket: "appnewsnetwork-174cd.appspot.com",
	messagingSenderId: "596547983046",
	appId: "1:596547983046:web:d9bdd6cedf386b59ba29c7",
	measurementId: "G-TFCP1K1G1J"
  };

  
  export function initializeFirebase() {
	  const app = initializeApp(firebaseConfig);
	  return app;
  }