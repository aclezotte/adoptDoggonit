var app = angular.module("badaBingBadaBoom");

app.controller("resultCtrl", ["$scope", "adoptFactory", "$location", function ($scope, adoptFactory, $location) {

    $scope.pets = [];

    $scope.pets = adoptFactory.returnPets();

    console.log($scope.pets);

    $scope.choosePet = function (petName) {
        angular.forEach($scope.pets, function(value, key){
            if(value.name.$t === petName) {
                adoptFactory.petChoice(value);
            }
        });

        $location.path("/adopt");
    };

}]);
