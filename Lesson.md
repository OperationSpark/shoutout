Authenticating with Facebook
========

#Installation

Before you can work on this portion of the app, you need to provide us with your Cloud9 workspace URL.  That URL will be something like:

    https://shoutout-jfraboni.c9.io

...where `jfraboni` will be your Cloud9 username.  Once we have this, we can create a Facebook test account for you, and provide you a test App Id, which you'll need to plug into your app's settings.

#Every App has an Entry Point

Let's wire up some routes in our app to start the flow of the user's experience through our shoutout feature.

We need a welcome page that is displayed to user's when landing on the app, and which we'll return to when we logout.

**TOOD 1 : The Welcome State**

Open up the the file:

    www/js/app.js

`app.js` is the main entry point of our ionic/angularjs app, and it's in this file that we'll configure the routes for our app.

Configuring routes in this way allows us to respond in a decoupled manner to user requests.  When a user selects a menu item to show a certain page in the app, our `ui-router`, part of the angularjs stack, will handle these requests, and based on our settings in the `app.js` file, will load the appropriate view and initialize the appropriate controller.

```javascript
// Other code...

// TODO 1 : Create the app.welcome state //
.state('app.welcome', {
  url: "/welcome",
  views: {
    'menuContent' :{
      templateUrl: "templates/welcome.html",
      controller: 'WelcomeCtrl'
    }
  }
})
    
// Other code...
```

This bit of code calls the state configuration method of the `ui-router`, passing to it an object that represents settings for this state of the app.  States help us break down our app into discrete sections; this concept is often described by the design pattern, the State Machine.

When a certain condition met or an event happends within our app, which can trigger a state transition to another states.  And so far in our app, we've described only one state, the the welcome state.

**TOOD 2 : Default Route**

Still in the app.js file, let's setup a default route.  When ever the user lands on the app for the first time, or the app doesn't recognize a request, by default, we'll take the user to our welcome page.

```javascript
/*
 * TODO 2 : Add the welcome route as the default route
 * if none of the above states are matched, use this as the fallback
 */
$urlRouterProvider.otherwise('/app/welcome');
```

**TODO 3 : A Simple Welcome View**

Ok, finally, let's create a very simple welcome page: Open up the file at:

    www/templates/welcome.html

Find TODO 3, and using the image html tag, embed our logo on our welcome page:

```html
<!-- TODO 3 : embed the megaphone logo -->
<img ng-src="img/megaphone.svg" class="center"/>
```
Cool, the welcome.html template is the view that we wired to our app's `wecome` state in steps 1 and 2.

**Run the App!**

Go ahead and run the app for the first time by entering the following comnand in the command-line:

    $ ionic serve $PORT

...then copy the URL that appears in the popup, open a new browser tab, then paste the URL in the address bar of the new tab, and hit enter - this will load your app up in the new tab.

Great, now we have our welcome route and view, providing the user with an entry point into the app!

---

#Social Integration

Integrating your app on social platforms is advantageous for many reasons.

We are going to allow the user to authenticate through Facebook.  As we work, we'll start to wire in the functionality of the menu items.

**TODO 4 : The Facebook Service**

Open up the file at:

    www/js/services.js

Services are one tier of the MVC(S) design pattern, Model, View, Controller and Service.  Services represent the functionality app responsible for fetching, and possibly formatting, data.  Sometimes the data may be local to the app, but often times the data resides across a network in a database of some sort.

You can think of services like waiters in restaurants: you ask the server for some food, the server delivers it to you, and you need not know how it's made or in fact, even from where it came.

Services allow us to encapsulate the methods by which we're retrieving our data, and this is powerful, because if we found a better, more effecient way to do so, our client (our app) would not need to change with the exception of some configuration, and even then, maybe would not have to change at all.

In our case, we need a service to retrieve our user and their associated data on the Facebook platform.  We've already coded the login service, so let's create the logout service so we can close the loop on the user experience:

Find TODO 4 and create the logout function:

```javascript
// TODO 4 : create the logout function //
logout: function(callback) {
    facebook.logout(function(response) {
        console.log('Facebook logout succeeded');
        setStatus('disconnected');
        callback();
    });
},
```

**TODO 5 : Showing the Login Popup**

Let's lean on the Ionic frameworks awesome set of built in views to create a login popup for our app.  This popup will display it's choice of login or logout, depending on the user's login status.

Open up the file at:

    www/js/controllers.js

```javascript
// TODO 5 : Create the openLogin function //
$scope.openLogin = function() {
    $scope.modal.show();
};
```

**TODO 6 : Updating the Login Status**

Alrighty, you can close any other files if you want, and open the file:

    www/js/controllers.js

Controllers are the glue of our app.  They respond to user requests, make decisions, and often make use of our services to gather and prepare data to be displayed to the user.

By sepearating this logic into a discrete object, we can, for example, change the behaviour of views without changing the views themselves!

Find TODO 6 and create the updateLoginStatus function:

```javascript
// TODO 6 : create the updateLoginStatus function //
$scope.updateLoginStatus = function() {
    if (FacebookService.isLoggedIn()) {
        FacebookService.logout(function () {
            $scope.closeLogin();
            $state.go("app.welcome");
        });
    } else {
        FacebookService.login(function () {
            $scope.closeLogin();
            $state.go("app.shouts");
        });
    }
};
```

By adding this method to our `$scope` object, we're making them available to our view.

**TODO 7 : Providing a Checking the Login Status**

Also, while where here in the `controllers.js` file, let's make one more helper method in our controller to help the view make some decisions about state:

```javascript
// TODO 7 : Create the helper method, isLoggedIn //
$scope.isLoggedIn = function () {
    return FacebookService.isLoggedIn();
};
```

**TODO 8 : Checking the Login Status**

To make our app responsive to our user's login status, let's add the following angularjs `ng-if` to our last 3 menu items so that they only appear _if_ the user is logged-in:

    ng-if="isLoggedIn()"

Open up the file at:

    www/templates/menu.html
    
Find TODO 8, and add the `ng-if="isLoggedIn()"` to each of the last 3 menu items so that the <ion-item ...> tag looks like this:

```html
<!-- TODO 8 : add the check against isLoggedIn() -->
<ion-item ng-if="isLoggedIn()" nav-clear menu-close class="item-icon-left" href="#/app/shoutout">
```

Cool, let's switch to the other web browser tab where our app is running and hit refresh, and let's try out our new feature, authenticating the user on Facebook.

Alright, you should be able to login now, but you may have noticed an error:

    Uncaught Error: Could not resolve 'app.shouts' from state 'app.welcome'


Our app is requesting to go to a state we've yet to create, so let's create this state next.

---

#The Gist of the App

**TODO 9 : The Shouts State**

Open up the file at:

    www/js/app.js

Find TODO 9 and create the shouts state configuration:

```javascript
// TODO 9 : Create the shout state //
.state('app.shouts', {
  url: "/shouts",
  views: {
    'menuContent' :{
      templateUrl: "templates/shouts.html",
      controller: 'ShoutsCtrl'
    }
  }
})
```

**TODO 10 : The Shouts Controller**

Open up the file at:

    www/js/controller.js

```javascript
// TODO 10 : Create the Shouts controller//
.controller('ShoutsCtrl', function($scope, FacebookService) {
    FacebookService.shouts(function (err, shouts) {
        if (err) return console.log(err);
        $scope.$apply(function() {
            $scope.shouts = shouts;
        });
    })
})
```

**TODO 11 : The Shouts Controller**

Open up the file at:

    www/templates/shouts.html

```html
<!-- TODO 11 : Include the shout message in the view -->
{{shout.message.replace('SHOUTOUT: ', '')}}
```


**Refresh the app!**

Login and go to the shouts page...