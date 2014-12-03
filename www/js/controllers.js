angular.module('shoutout.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    openFB.getLoginStatus(function (response) {
        setStatus(response.status);
    });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.updateLoginStatus = function() {
        if ($scope.status === 'connected') {
            $scope.fbLogout();
        } else {
            $scope.fbLogin();
        }

    }

    $scope.fbLogin = function() {
        openFB.login(
            function(response) {
                if (response.status === 'connected') {
                    console.log('Facebook login succeeded');
                    $scope.closeLogin();
                } else {
                    alert('Facebook login failed');
                }
                setStatus(response.status);
            },
            {scope: 'email,publish_actions'});
    };

    /**
     * openFB.logout accepts a callback with no parameters, 
     * so if the callback is invoked, assume we're logged out
     */ 
    $scope.fbLogout = function() {
        openFB.logout(
            function() {
                console.log('Facebook logout succeeded');
                $scope.closeLogin();
                setStatus('disconnected');
          });
    };

    /**
     * Given the user's login status, set some values 
     * on the scope used to set state on the view
     */
    function setStatus (status) {
        $scope.status = status;
            if (status === 'connected') {
                $scope.txtLogAction = "Logout";
                $scope.txtLogActionFacebook = "of Facebook"
            } else {
                $scope.txtLogAction = "Login";
                $scope.txtLogActionFacebook = "with Facebook"
            }
    }
    $scope.setStatus = setStatus;

    $scope.isLoggedIn = function () {
        return ($scope.status === 'connected');
    }
})

.controller('ShoutsCtrl', function($scope) {
    // TODO : MOVE TO SERVICE //
    $scope.shouts = [
        { title: 'John Fraboni did the deed!', id: 1 },
        { title: 'Max is the Bomb!', id: 2 },
        { title: 'Grace killed it!', id: 3 },
        { title: 'Matt is Amazing!', id: 4 },
        { title: 'Danielle is a Saint!', id: 5 },
        { title: 'Killed it, Rikey!', id: 6 }
    ];

    $scope.find = function (id) {
        for (var i = 0; i < $scope.shouts.length; i++) {
            if ($scope.shouts[i].id === id) {
                return $scope.shouts[i];
            }
        }
        return null;
    }
})

.controller('ShoutCtrl', function($scope, $stateParams) {
    // TODO : MOVE TO SERVICE //
    $scope.shouts = [
        { title: 'John Fraboni did the deed!', id: 1 },
        { title: 'Max is Bomb!', id: 2 },
        { title: 'Grace killed it!', id: 3 },
        { title: 'Matt is Amazing!', id: 4 },
        { title: 'Danielle is a Saint!', id: 5 },
        { title: 'Killed it, Rikey!', id: 6 }
    ];

    function find (id) {
        id = parseInt(id);
        var len = $scope.shouts.length;
        var shout;
        for (var i = 0; i < len; i++) {
            shout = $scope.shouts[i];
            if (shout.id === id) {
                return shout;
            }
        }
        return null;
    }

    $scope.shout = find($stateParams.shoutId);
})

.controller('ShoutoutCtrl', function($scope, $stateParams) {
  $scope.share = function(event) {
    openFB.api({
        method: 'POST',
        path: '/me/feed',
        params: {
            message: "I'll be attending: '" + $scope.session.title + "' by " +
                $scope.session.speaker
        },
        success: function () {
            alert('The session was shared on Facebook');
        },
        error: function () {
            alert('An error occurred while sharing this session on Facebook');
        }
    });
  };
})

.controller('ProfileCtrl', function($scope) {
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });
});
