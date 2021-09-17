
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
document.getElementById("user_name").innerHTML="welcome to Kwitter "+user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("roomname is "+room_names);
      row="<div class='room_name' id="+room_names+" onclick='redirect_to_room(this.id)'>#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();
function log(){
      localStorage.removeItem("user_name");
      localstorage.removeItem("room_name");
      window.location="kwitter.html";
      
}

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "addroomname"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function redirect_to_room(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
