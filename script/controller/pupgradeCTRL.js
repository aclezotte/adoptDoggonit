var app = angular.module("badaBingBadaBoom");

app.controller("pupgradeCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

    $scope.skipQuiz = function () {
        adoptFactory.getZip($scope.userZip);
        adoptFactory.noQuiz();
        $location.path("/result");
        $scope.hideLogo = true;
    }

    // $location.path("/result");

    };
