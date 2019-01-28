angular.module('randomizerCtrl', []).controller('randomizerCtrl', ['$scope', 'randomizerService', function($scope, randomizerService){

    $scope.randomize = function(){
        $scope.company = randomizerService.getCompany();
        $scope.preposition = randomizerService.getPreposition();
        $scope.noun = randomizerService.getNoun();
        $scope.audience = randomizerService.getAudience();
    };

    $scope.randomize();

}]);