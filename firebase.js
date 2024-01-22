const firebaseConfig = {
    apiKey: "AIzaSyChZCsqcXRD4m1nBqQe7tw2rBG7rWnmoo0",
    authDomain: "live-temp-contactus.firebaseapp.com",
    databaseURL: "https://live-temp-contactus-default-rtdb.firebaseio.com",
    projectId: "live-temp-contactus",
    storageBucket: "live-temp-contactus.appspot.com",
    messagingSenderId: "95346415570",
    appId: "1:95346415570:web:1d4769a51a3003d44e1a0b"
  };
  
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var phone = getElementVal("phone");
    var message = getElementVal("message");


    saveMessage(name, email, phone, message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(()=>{
        document.querySelector(".alert").style.display = "none";
    },3000);

    document.getElementById("contactForm").reset();

} 


const saveMessage = (name, email, phone, message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        phone: phone,
        message: message,
    })
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};