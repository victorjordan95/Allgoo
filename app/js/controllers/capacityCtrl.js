app.controller("capacityCtrl", function ($scope, $routeParams,$window, $rootScope) {
    'use strict';

    

    $scope.capacity = function() {
        $rootScope.capacidadeMax = capacidadeMax.value;
        $window.location.href = '#/elevador';
    }

});

