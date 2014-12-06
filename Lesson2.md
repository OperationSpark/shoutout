The Shoutout Feature
===

**TODO 1**

Open up the file:

    www/index.html

Find TODO 1:

```html
// TODO 1 : Replace your app id here //
appId      : '1506053479671365',
```


**TODO 2**

Open up the file:

    www/js/controllers.js

Find TODO 2:

```javascript
// TODO 2 : Use the FacebookService to post a shoutout //
FacebookService.shoutout('498914393584826', shoutout, function (err, shoutId) {
    if (err) return console.log(err);
    $state.go("app.shouted", {shoutId: shoutId});
})

```

```html
<!-- TODO 3 : Invoke the shoutout method on-click of the Shout button -->
<button class="button button-positive" ng-click="shoutout(data.name, data.workplace)">
```

**TODO 4**

Open up the file:

    www/js/controllers.js

Find TODO 4:

```javascript
// TODO 4 : Call FacebookService.shout to retreive the shout //
FacebookService.shout(
    $stateParams.shoutId, 
    function (err, shout) {
        if (err) return console.log(err);
        $scope.$apply(function() {
            $scope.shout = shout;
        });
});
```