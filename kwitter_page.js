const firebaseConfig = {
    apiKey: "AIzaSyAl9n54QibTNZKehmJDrgykt7rrS9iE0Ik",
    authDomain: "letschat-web-app-3ddaf.firebaseapp.com",
    projectId: "letschat-web-app-3ddaf",
    storageBucket: "letschat-web-app-3ddaf.appspot.com",
    messagingSenderId: "704274646816",
    appId: "1:704274646816:web:125de626cbeb329e9eb945"
};

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    message = document.getElementById("msg").value;
    document.getElementById("msg").innerHTML = "";

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}
function logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  }