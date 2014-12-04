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

.factory('FacebookService', function ($q) {
	return {
		init: function () {
			var deferred = $q.defer();

			window.fbAsyncInit = function() {
		        FB.init({
		          appId      : '1502775536665826',
		          xfbml      : true,
		          version    : 'v2.1'
		        });
		        deferred.resolve(FB);
		      };

		      (function(d, s, id){
		         var js, fjs = d.getElementsByTagName(s)[0];
		         if (d.getElementById(id)) {return;}
		         js = d.createElement(s); js.id = id;
		         js.src = "//connect.facebook.net/en_US/sdk.js";
		         fjs.parentNode.insertBefore(js, fjs);
		       }(document, 'script', 'facebook-jssdk'));
		      
		      return deferred.promise;
		}
	}
});