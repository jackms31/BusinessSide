angular.module('randomizerDirective', []).directive('randomizer', [ function(){
    return {
        restrict: 'C',
        templateUrl: './randomizer/randomizer.html'
    };
}]);