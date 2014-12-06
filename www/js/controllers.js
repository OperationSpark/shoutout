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

    // TODO 5 : Create the openLogin function //
    
    
    // TODO 6 : Create the updateLoginStatus method //
    
    
    // TODO 7 : Create the helper method, isLoggedIn //
    

    $scope.txtLogAction = function () {
        return FacebookService.txtLogAction();
    };
    
    $scope.txtLogActionFacebook = function () {
        return FacebookService.txtLogActionFacebook();
    };
})

// TODO 10 : Create the Shouts controller//


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
