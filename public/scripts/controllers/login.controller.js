myApp.controller('LoginController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', function(FactoryFactory, $firebaseAuth, $firebase, $location) {

  console.log("login controller works");

  var self = this;
//must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


  self.message = "login sourced";



}]);//end controller code block
