import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAKo6p1GewPgS6ba5APZtMvSttH4PE50Yo",
	authDomain: "pvks-cd40e.firebaseapp.com",
	projectId: "pvks-cd40e",
	storageBucket: "pvks-cd40e.appspot.com",
	messagingSenderId: "1020590294325",
	appId: "1:1020590294325:web:fc732de1fa8c353379787c",
	measurementId: "G-PF91XWT7J2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);