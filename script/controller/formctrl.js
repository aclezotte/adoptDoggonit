var app = angular.module("badaBingBadaBoom");

app.controller("formCtrl", ["$scope", "adoptFactory", function($scope, adoptFactory){

    $scope.sex = "";
    $scope.age = "";
    $scope.size = "";

    $scope.log = function(){
        console.log($scope.sex);
        console.log($scope.age);
        console.log($scope.size);
    };

    $scope.sendToFactory = function(sex, age, size) {
        adoptFactory.getPets(sex, age, size);
    };

}]);