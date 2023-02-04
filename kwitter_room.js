const firebaseConfig = {
    apiKey: "AIzaSyAl9n54QibTNZKehmJDrgykt7rrS9iE0Ik",
    authDomain: "letschat-web-app-3ddaf.firebaseapp.com",
    projectId: "letschat-web-app-3ddaf",
    storageBucket: "letschat-web-app-3ddaf.appspot.com",
    messagingSenderId: "704274646816",
    appId: "1:704274646816:web:125de626cbeb329e9eb945"
  };

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  document.getElementById("room_name").innerHTML = "";
  localStorage.setItem("room_name", user_name);

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      function RedirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  }
});});}
getData();

function logout(){
  window.location = "index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}