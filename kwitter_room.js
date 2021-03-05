var firebaseConfig = {
      apiKey: "AIzaSyBuOeRmugBcG_UmYXwlZX9qF_VtZiEbwc4",
      authDomain: "project93-96.firebaseapp.com",
      databaseURL: "https://project93-96-default-rtdb.firebaseio.com",
      projectId: "project93-96",
      storageBucket: "project93-96.appspot.com",
      messagingSenderId: "113388541146",
      appId: "1:113388541146:web:706b9fa1216adc51e501e3",
      measurementId: "G-YB21813RDY"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update
        ({
              purpose:"adding room name"
        });
  
        localStorage.setItem("room_name", room_name);
        window.location.replace("kwitter_page.html");
  
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr> <br>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location.replace("kwitter_page.html");
}

