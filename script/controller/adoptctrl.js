var app = angular.module("badaBingBadaBoom");

app.controller("adoptCtrl", ["$scope", "adoptFactory", function ($scope, adoptFactory) {

    $scope.pet = adoptFactory.returnDisplayPet();
    console.log($scope.pet);

}]);


