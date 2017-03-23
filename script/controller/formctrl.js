var app = angular.module("badaBingBadaBoom");

app.controller("formCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

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
        $location.path("/result");
    };

}]);
