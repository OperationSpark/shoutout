angular.module('shoutout.controllers', ['shoutout.services'])

.controller('AppCtrl', function($scope, $state, $ionicModal, $timeout, FacebookService) {

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    $scope.openLogin = function() {
        $scope.modal.show();
    };

    $scope.updateLoginStatus = function() {
        if (FacebookService.status() === 'connected') {
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

    $scope.txtLogAction = function () {
        return FacebookService.txtLogAction();
    };

    $scope.txtLogActionFacebook = function () {
        return FacebookService.txtLogActionFacebook();
    };

    $scope.isLoggedIn = function () {
        return (FacebookService.status() === 'connected');
    };
})

.controller('ShoutsCtrl', function($scope, FacebookService) {
    FacebookService.shouts(function (shouts) {
        $scope.$apply(function() {
            $scope.shouts = shouts;
        });
    })
})

.controller('ShoutCtrl', function($scope, $stateParams) {
    // TODO : MOVE TO SERVICE //
    $scope.shouts = [
        { title: 'John Fraboni did the deed!', id: 1 },
        { title: 'Max is the Bomb!', id: 2 },
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

.controller('ShoutoutCtrl', function($scope, $state, $stateParams, ShoutService) {
    $scope.shout = function(name, workplace) {
        // TODO : Move this to form validation //
        if (name) {
            var shoutout = 'SHOUTOUT: ' + ShoutService.get(name);
            if (workplace) {
                shoutout += ' ' + name + ' works at ' + workplace + '!'
            }
            console.log(shoutout);
            
            FB.api(
                '/498914393584826/feed', 
                'post', 
                {message: shoutout}, 
                function function_name (response) {
                    console.log('shoutout result:');
                    console.log(response);
                    $state.go("app.shouted", {shoutId: response.id});
            });
            //$state.go("app.shouted", {shoutId: "10152429278741922_10152437354521922"});
        }
    };
})

.controller('ShoutedCtrl', function($scope, $state, $stateParams) {
    FB.api(
        $stateParams.shoutId,
        function (response) {
          if (response && !response.error) {
                $scope.shoutout = response.message.replace('SHOUTOUT: ', '');
          }
        }
    );
})

.controller('ProfileCtrl', function($scope, FacebookService) {
    FacebookService.me(function (response) {
        if (response && !response.error) {
            $scope.$apply(function() {
                $scope.user = response;
            });
        }
    })             
})

.controller('WelcomeCtrl', function($scope, FacebookService) {
    
});
