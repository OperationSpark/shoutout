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

    $scope.txtLogAction = function () {
        return FacebookService.txtLogAction();
    };

    $scope.txtLogActionFacebook = function () {
        return FacebookService.txtLogActionFacebook();
    };

    $scope.isLoggedIn = function () {
        return FacebookService.isLoggedIn();
    };
})

.controller('ShoutsCtrl', function($scope, FacebookService) {
    FacebookService.shouts(function (err, shouts) {
        if (err) return console.log(err);
        $scope.$apply(function() {
            $scope.shouts = shouts;
        });
    })
})

.controller('ShoutCtrl', function($scope, $stateParams) {
    FacebookService.shout(
        $stateParams.shoutId, 
        function (err, shout) {
            if (err) return console.log(err);
            $scope.$apply(function() {
                $scope.shout = shout;
            });
    });
})

.controller('ShoutoutCtrl', function($scope, $state, ShoutService, FacebookService) {
    $scope.shoutout = function(name, workplace) {
        // TODO : Move this to form validation //
        if (name) {
            var shoutout = 'SHOUTOUT: ' + ShoutService.get(name);
            if (workplace) {
                shoutout += ' ' + name + ' works at ' + workplace + '!'
            }
            console.log(shoutout);

            FacebookService.shoutout('498914393584826', shoutout, function (err, shoutId) {
                if (err) return console.log(err);
                $state.go("app.shouted", {shoutId: shoutId});
            })
            //$state.go("app.shouted", {shoutId: "10152429278741922_10152437354521922"});
        }
    };
})

.controller('ShoutedCtrl', function($scope, $stateParams, FacebookService) {
    FacebookService.shout(
        $stateParams.shoutId, 
        function (err, shout) {
            if (err) return console.log(err);
            $scope.$apply(function() {
                $scope.shout = shout;
            });
    });
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
