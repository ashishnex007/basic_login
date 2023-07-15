
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//   import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js" 
  import {getAuth} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
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
    databaseURL: "https://signup-form-9a65b-default-rtdb.firebaseio.com/",
  }
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  const database = getDatabase(app)


let email= document.getElementById("Username")
let password= document.getElementById("Password")


window.sain= function(){
    if(v_email(email)== false || v_password(password)==false){
       return 
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then(function(){
        let user = auth.currentUser
        let database_ref= database.ref()

        let user_data={
            email:email,
            password:password
        }
        database_ref.child('./users/' + user.uid).set(user_data)
    })
    .catch(function(error){
        console.log(error)
    })
}

function v_email(email){
    let expression =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(expression.test(email)==true){
        return true
    }
    else{
        return false
    }
}

function v_password(password){
    if(password<6){
        return false
    }
    else{
        return true
    }
}

// window.sain=function(){
//     let obj = {
//         Username:Username.value,
//         Password:Password.value
//     }
//     createUserWithEmailAndPassword(auth,obj.Username,obj.Password)
//     .then(function(success){
//         Swal.fire(
//             'New user Created',
//             'hahan :)',
//             'success'
//           )
//           console.log(`welcome ${obj["Username"]}`)
//     })
//     .catch(function(err){
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops',
//             text: 'something went wrong'
//           })
//           console.log(`${obj["Username"]} doesn't exist`)
//     })
// }