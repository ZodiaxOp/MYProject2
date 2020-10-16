var firebaseConfig = {
    apiKey: "AIzaSyA9EibOQ29Cuu2ySi5gS4BY1DliocPsB7Y",
    authDomain: "m-e-s-s-a-n-g-e-r.firebaseapp.com",
    databaseURL: "https://m-e-s-s-a-n-g-e-r.firebaseio.com",
    projectId: "m-e-s-s-a-n-g-e-r",
    storageBucket: "m-e-s-s-a-n-g-e-r.appspot.com",
    messagingSenderId: "1027918378199",
    appId: "1:1027918378199:web:50ef9e2b2f065cb389ac92",
    measurementId: "G-SGXFVB490Y"
};
firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ name: user_name, message: msg, like: 0 });
    document.getElementById("msg").value = "";
}