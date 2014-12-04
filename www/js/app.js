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
    .state('app.shoutout', {
      url: "/shoutout",
      views: {
          'menuContent' :{
              templateUrl: "templates/shoutout.html",
              controller: "ShoutoutCtrl"
          }
      }
    })
    .state('app.shouted', {
      url: "/shouted/:shoutId",
      views: {
          'menuContent' :{
              templateUrl: "templates/shouted.html",
              controller: "ShoutedCtrl"
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

