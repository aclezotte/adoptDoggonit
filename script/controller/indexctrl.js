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

    // scope.submitZip2 = function () {
    //     adoptFactory.getZip($scope.userZip);
    //     $location.path("/result");
    //     $scope.hideLogo = true;
    // }
});

app.directive("quizMe", function(){
    return {
        restrict: "E",
        templateUrl: "quiz-me.html",
        replace: false
    };
 })   

app.directive("pupGrade", function(){
    return {
        restric: "E",
        templateUrl: "pup-grade.html",
        replace: false
    };
});
