angular.module('randomizerCtrl', []).controller('randomizerCtrl', ['$scope', 'randomizerService', function($scope, randomizerService){

    $scope.randomize = function(){
        $scope.company = randomizerService.getCompany();
        $scope.noun = randomizerService.getNoun();
        $scope.location = randomizerService.getLocation();

        console.log($scope.noun.image);
    };

    $scope.randomize();

}]);