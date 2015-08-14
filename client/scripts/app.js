

var myApp = angular.module('myApp',[]);

myApp.controller("WelcomeController", ['$scope', '$timeout', function($scope, $timeout){

    $scope.homescore = 0;
    $scope.awayscore = 0;


    $scope.updateHomeScore = function(){
        $scope.homescore = $scope.newhomescore;
        checkScore();

    };
    $scope.updateAwayScore = function(){
        $scope.awayscore = $scope.newawayscore;
        checkScore();
    };

    function checkScore(){
        if ($scope.homescore == $scope.awayscore){
            $scope.message = "Tie Game!"
        }
        else if ($scope.homescore > $scope.awayscore) {
            $scope.message = "The Home Team Is Winning!"
        }
        else {
            $scope.message = "The Home Team Is Losing!"
        }

    }

}]);

