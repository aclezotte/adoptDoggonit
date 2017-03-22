var app = angular.module("badaBingBadaBoom");

app.controller("resultCtrl", ["$scope", "adoptFactory", function ($scope, adoptFactory) {

    $scope.pets = [];

    $scope.petsFromFactory = function () {
        $scope.pets = adoptFactory.returnPets;
        console.log($scope.pets);
    };

}]);