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

    $scope.skipQuiz = function () {
        adoptFactory.getZip($scope.userZip);
        adoptFactory.noQuiz();
        $location.path("/result");
        $scope.hideLogo = true;
    }

});

app.directive("quizMe", function(){
    return {
        restrict: "E",
        templateUrl: "quiz-me.html",
        replace: true
    };
 })

app.directive("pupGrade", function(){

    return {
        restrict: "E",
        // controller: "pupgradeCtrl",
        templateUrl: "pup-grade.html",
        replace: true
    };
});
