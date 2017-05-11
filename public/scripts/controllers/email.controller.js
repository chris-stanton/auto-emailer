
myApp.controller('EmailController',['FactoryFactory', '$firebaseAuth', '$firebase', '$location', '$window', function(FactoryFactory, $firebaseAuth, $firebase, $location, $window) {
  // console.log('TwoController running');

  var self = this;
 //must have variable for notyf
  var notyf = new Notyf();
//firebase
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();

  self.message = 'angular Email Controller sourced';

  init();

//startup function
  function init() {
    loginCheck();
  }

//redirect to login of not authenticated
  function loginCheck() {
    var firebaseUser = auth.$getAuth();
      if (firebaseUser === null) {
        $location.path('/login');
      } else {
        return
      }
  }//end of loginCheck()


//sends email input object to server to be sent through nodemailer
self. sendEmail = function(newEmail) {
  console.log("submitted email stats: ", newEmail);
    FactoryFactory.sendEmail(newEmail);
}





}]);//end of myApp.controller
