var app = angular.module("badaBingBadaBoom");

app.controller("indexCtrl", function ($scope, adoptFactory, $location) {

    $scope.submitZip = function () {
        adoptFactory.getZip($scope.userZip);
        $location.path("/form");
    }

});
