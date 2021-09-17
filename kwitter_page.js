//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBChsMLFzSgAoWGgPYn3hINFupmvsPwO0Q",
      authDomain: "gaming-5123.firebaseapp.com",
      databaseURL: "https://gaming-5123-default-rtdb.firebaseio.com",
      projectId: "gaming-5123",
      storageBucket: "gaming-5123.appspot.com",
      messagingSenderId: "751771836954",
      appId: "1:751771836954:web:9697077d4e4d2ec7ff27a3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function log(){
      localStorage.removeItem("user_name");
      localstorage.removeItem("room_name");
      window.location="kwitter_room.html";
}

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            Message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
