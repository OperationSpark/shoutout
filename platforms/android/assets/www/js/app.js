// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
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
  openFB.init({appId: '1502775536665826'});

  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
    .state('app.shoutout', {
      url: "/shoutout",
      views: {
          'menuContent' :{
              templateUrl: "templates/shoutout.html",
              controller: "ShoutoutCtrl"
          }
      }
    })
    .state('app.profile', {
      url: "/profile",
      views: {
          'menuContent' :{
              templateUrl: "templates/profile.html",
              controller: "ProfileCtrl"
          }
      }
    })
    .state('app.shouts', {
      url: "/shouts",
      views: {
        'menuContent' :{
          templateUrl: "templates/shouts.html",
          controller: 'ShoutsCtrl'
        }
      }
    })
    .state('app.shout', {
      url: "/shouts/:shoutId",
      views: {
        'menuContent' :{
          templateUrl: "templates/shout.html",
          controller: 'ShoutCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/shouts');
});

