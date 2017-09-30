app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "assets/templates/capacity.html",
        controller: 'capacityCtrl'

    }).when("/elevador", {
        templateUrl: "assets/templates/elevator.html",
        controller: 'elevatorCtrl'
    })
});