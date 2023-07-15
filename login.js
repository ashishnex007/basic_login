
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js"
  import {getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { initializeApp } from "firebase/app";
  import { getDatabase } from "firebase/database";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJuvNMPXZX-Dcz_8XDJ84gi68EJKqgBjA",
    authDomain: "signup-form-9a65b.firebaseapp.com",
    projectId: "signup-form-9a65b",
    storageBucket: "signup-form-9a65b.appspot.com",
    messagingSenderId: "879870766275",
    appId: "1:879870766275:web:e59b4fa03b2c85520c0676",
    databaseURL: "https://signup-form-9a65b-default-rtdb.firebaseio.com",
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  const auth = getAuth()
  const database = getDatabase(app)


let Username= document.getElementById("Username")
let Password= document.getElementById("Password")

window.login= function(){
    // e.preventDefault()
    let obj = {
        Username:Username.value,
        Password:Password.value
    }
    signInWithEmailAndPassword(auth,obj.Username,obj.Password)
    .then(function(success){
        Swal.fire(
            'Valid user',
            'Logging in',
            'success'
          )
          console.log(`welcome ${obj["Username"]}`)
    })
    .catch(function(err){
        Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: 'Check your credentials'
          })
          console.log(`${obj["Username"]} doesn't exist`)
    })
}