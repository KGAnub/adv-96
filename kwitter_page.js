const firebaseConfig = {
      apiKey: "AIzaSyDh8b5TrGF1MBfcUDXTv2-zfdAxJQQ8yBI",
      authDomain: "kwitter-2ea5c.firebaseapp.com",
      databaseURL: "https://kwitter-2ea5c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2ea5c",
      storageBucket: "kwitter-2ea5c.appspot.com",
      messagingSenderId: "138836497981",
      appId: "1:138836497981:web:b8868dbfac852fd16bbc54"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
            document.getElementById("msg").value = "";
            
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
