var app = angular.module("badaBingBadaBoom");

app.controller("pupgradeCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

    adoptFactory.noQuiz($scope);

    $location.path("/result");

    };
