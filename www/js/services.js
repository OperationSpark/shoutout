angular.module('shoutout.services', ['ngResource'])

.factory('ShoutService', function () {
	var shouts = [
		'_ did the deed!',
        '_ is the Bomb!',
        '_ killed it!',
        '_ is Amazing!',
        '_, you are a Saint!',
        'Killed it, _!'
	];

	function randomNumberBetween(min, max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

    return {
    	get: function (name) {
    		return shouts[randomNumberBetween(0, shouts.length-1)].replace('_', name);
    	}
    }
})

.factory('FacebookService', function () {
	var facebook = window.FB;
	setStatus(facebook.status);

	/*
	 * A few properties used by views reflecting the user's login status.
	 */
	var _status
	var _txtLogAction;
	var _txtLogActionFacebook;

    function setStatus (status) {
        _status = status;

        if (_status === 'connected') {
            _txtLogAction = "Logout";
            _txtLogActionFacebook = "of Facebook"
        } else {
            _txtLogAction = "Login";
            _txtLogActionFacebook = "with Facebook"
        }
    }

	return {
		login: function (callback) {
			facebook.login(function(response) {
	            if (response.status === 'connected') {
	                console.log('Facebook login succeeded');
	            } else {
	                alert('Facebook login failed');
	            }
	            setStatus(response.status);
	            callback();
	        }, 
	        {scope: 'publish_actions'});
		},

		logout: function(callback) {
	        facebook.logout(function(response) {
	            console.log('Facebook logout succeeded');
	            setStatus('disconnected');
	            callback();
	        });
	    },

	    shoutout: function (facebookId, shoutout, callback) {
	    	FB.api(
                '/' + facebookId + '/feed', 
                'post', 
                {message: shoutout}, 
                function function_name (response) {
                	var err;
                	var shoutId;
                	if (response && !response.error) {
                		shoutId = response.id
                		console.log('shoutout succeeded: %s', shoutId);
                	} else {
                		err = response.error;
                		console.log('shoutout failed: %s', response.error);
                	}
                    callback(err, shoutId);
                }
            );
	    },

		shouts: function (callback) {
			facebook.api(
		        "/498914393584826/feed",
		        function (response) {
		        	var err;
		        	var shouts = [];
		          	if (response && !response.error) {
		            	var posts = response.data;
		            
			            for (var i = 0; i < posts.length; i++) {
			                var post = posts[i];
			                if (post.hasOwnProperty('message') && /^SHOUTOUT:/i.exec(post.message)) {
			                    shouts.push(post);    
			                }
			            }
		          	} else {
		          		err = response.error;
		          	}
		          	callback(err, shouts);
		        }
		    );
		},

		shout: function (id, callback) {
			FB.api(
		        id,
		        function (response) {
		        	var err;
		        	var shout;
		          	if (response && !response.error) {
		                shout = response.message.replace('SHOUTOUT: ', '');
		          	}
		          	else {
		          		err = response.error;
		          	}
		          	callback(err, shout);
		        }
		    );	
		},

		getAsyncLoginStatus: function(callback) {
	        facebook.getLoginStatus(function(response) {
	            setStatus(response.status);
	        });
	    },

	    me: function (callback) {
	    	facebook.api(
		        "/me",
		        callback
		    );
	    },

	    status: function () {
	    	return _status;
	    },

	    isLoggedIn: function () {
	    	return (_status === 'connected');
	    },

	    txtLogAction: function () {
	    	return _txtLogAction;
	    },

	    txtLogActionFacebook: function () {
	    	return _txtLogActionFacebook;
	    }

	}
});