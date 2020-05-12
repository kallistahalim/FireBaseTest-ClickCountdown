const firebaseConfig = {
    apiKey: "AIzaSyAz0Wt4eeA7S4cA_ejirgRfnuPsa5i_mK0",
    authDomain: "click-countdown-209fd.firebaseapp.com",
    databaseURL: "https://click-countdown-209fd.firebaseio.com",
    projectId: "click-countdown-209fd",
    storageBucket: "click-countdown-209fd.appspot.com",
    messagingSenderId: "701315088009",
    appId: "1:701315088009:web:26c48c84f580c6bb9b9058",
    measurementId: "G-VS3J9LN5Y5"
};

// Initialize Firebase with a "default" Firebase project
firebase.initializeApp(firebaseConfig);

var count = 100;

firebase.database().ref().on("value", function(snapshot){
    count = snapshot.val().clicks;
    $("#number-here").html(count);
}, function(error) {
    console.error(error);
});

