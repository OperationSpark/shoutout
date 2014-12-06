angular.module('shoutout', ['ionic', 'shoutout.controllers'])

.run(function($ionicPlatform) {

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    // TODO 1 : Create the app.welcome state //
    
     
    // TODO 9 : Create the shout state //
    
  
    /*
     * TODO 2 : Add the welcome route as the default route
     * if none of the above states are matched, use this as the fallback
     */
    
});

