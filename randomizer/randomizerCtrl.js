angular.module('randomizerCtrl', []).controller('randomizerCtrl', ['$scope', 'randomizerService', function($scope, randomizerService){

    $scope.randomize = function(){
        $scope.company = randomizerService.getCompany();
        $scope.adjective = randomizerService.getAdjective();
        $scope.noun = randomizerService.getNoun();
        $scope.location = randomizerService.getLocation();
    };

    $scope.randomize();

}]);