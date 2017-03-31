var app = angular.module("badaBingBadaBoom");

app.controller("indexCtrl", function ($scope, adoptFactory, $location) {

    $scope.hideLogo = false;

    $scope.tab = function (tab, hide) {
        $location.path(tab);
        $scope.hideLogo =  hide;
    }

    $scope.submitZip = function () {
        adoptFactory.getZip($scope.userZip);
        $location.path("/form");
        $scope.hideLogo = true;
    }

});
