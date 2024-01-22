const firebaseConfig = {
    apiKey: "AIzaSyDfooMN5vxR2fRYCT3POQpEk6pe56uiBio",
    authDomain: "minerva-1604.firebaseapp.com",
    databaseURL: "https://minerva-1604-default-rtdb.firebaseio.com",
    projectId: "minerva-1604",
    storageBucket: "minerva-1604.appspot.com",
    messagingSenderId: "399734462747",
    appId: "1:399734462747:web:5d52eace3f283930cbdbbe",
    measurementId: "G-83GZN4GD8Y"
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