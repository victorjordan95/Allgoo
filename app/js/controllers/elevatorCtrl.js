app.controller("elevatorCtrl", function ($scope, $rootScope) {
  'use strict';

  $scope.qtd = 0;
  $scope.andar = 0;
  $scope.capacidadeMax = $rootScope.capacidadeMax;

  $scope.calculateElevator = function () {

    $scope.qtd += enter.value - out.value;

  };

  $scope.ghostsMaybe = function () {
    if ($scope.qtd < 0) return true;
  };

});

