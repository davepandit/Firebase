import {initializeApp} from "firebase/pp"

//config
const firebaseConfig = {
    apiKey: "AIzaSyBjLDVVutzRvmg2d-LSoyGjjyHZNWkD9oA",
    authDomain: "book-management-241cb.firebaseapp.com",
    projectId: "book-management-241cb",
    storageBucket: "book-management-241cb.appspot.com",
    messagingSenderId: "196783909120",
    appId: "1:196783909120:web:20e8a4aacda9b367baabe5"
  };

  //initilaize or create an instance
const app = initializeApp(firebaseConfig)