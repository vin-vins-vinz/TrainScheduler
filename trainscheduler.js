// Initialize Firebase
var config = {
    apiKey: "AIzaSyBCf91WSiiLRx_dlFfrVxJJktpuzpBm3xk",
    authDomain: "trainscheduler-1edb4.firebaseapp.com",
    databaseURL: "https://trainscheduler-1edb4.firebaseio.com",
    projectId: "trainscheduler-1edb4",
    storageBucket: "trainscheduler-1edb4.appspot.com",
    messagingSenderId: "495913374339"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#add-btn").on("click", function() {

  var trainName = $("#name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#firsttrain-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };
  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(firstTrainUnix);
  console.log(newTrain.frequency);

  $("#name-input").val("");
  $("#destination-input").val("");
  $("#firsttrain-input").val("");
  $("#frequency-input").val("");

  return false;
});



database.ref().on("child_added", function(childSnapshot) {

  var trName = childSnapshot.val().name;
  var trDestination = childSnapshot.val().destination;
  var trFrequency = childSnapshot.val().frequency;
  var trFirstTrain = childSnapshot.val().firstTrain;



  $("#table > tbody").append("<tr><td>" + trName + "</td><td>" + trDestination + "</td><td>"
  + trFrequency + "</td></tr>");
});
