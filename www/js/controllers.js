angular.module('shoutout.controllers', ['shoutout.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, FacebookService) {
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.updateLoginStatus = function() {
        if ($scope.status === 'connected') {
            $scope.fbLogout();
        } else {
            $scope.fbLogin();
        }
    };

    $scope.fbLogin = function() {
        FB.login(function(response) {
            if (response.status === 'connected') {
                console.log('Facebook login succeeded');
                $scope.closeLogin();
            } else {
                alert('Facebook login failed');
            }
            setStatus(response.status);
        }, 
        {scope: 'publish_actions'});
        //     {scope: 'read_stream,email,publish_actions,publish_stream'});
    };

    $scope.fbLogout = function() {
        FB.logout(function(response) {
            console.log('Facebook logout succeeded');
            $scope.closeLogin();
            setStatus('disconnected');
        });
    };

    $scope.getFbLoginStatus = function(callback) {
        FB.getLoginStatus(function(response) {
            setStatus(response.status);
        });  
    } 

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

    var init = function () {
        var promise = FacebookService.init();
        promise.then(function(FB) {
          FB.getLoginStatus(function(response) {
                setStatus(response.status);
            });  
        });
    };
    // and fire it after definition
    init();
})

.controller('ShoutsCtrl', function($scope) {
<<<<<<< HEAD
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
=======
    FB.api(
        "/498914393584826/feed",
        function (response) {
          if (response && !response.error) {
            var posts = response.data;
            var shouts = [];
            for (var i = 0; i < posts.length; i++) {
                var post = posts[i];
                if (post.hasOwnProperty('message') && /^SHOUTOUT:/i.exec(post.message)) {
                    shouts.push(post);    
                }
>>>>>>> 5c9f53149d0e7b6254f2215f7d7c930008c1c00b
            }
            $scope.$apply(function() {
                $scope.shouts = shouts;
            });
          }
        }
    );
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
