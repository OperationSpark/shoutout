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
});