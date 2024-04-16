const firebaseConfig = {
    apiKey: "AIzaSyBreUMsxAvNPH6CO5hFI6WMyP6bLcVu6A8",
    authDomain: "bombaycraftcompany-2021.firebaseapp.com",
    databaseURL: "https://bombaycraftcompany-2021-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bombaycraftcompany-2021",
    storageBucket: "bombaycraftcompany-2021.appspot.com",
    messagingSenderId: "4395832415",
    appId: "1:4395832415:web:875c9663ebf6836f6477ea"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {

    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);
}
// Function to get get form values 
function getInputVal(id) {
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    });
}