angular.module('randomizerService', [])
    .factory('randomizerService', ['randomizerConstants', function(randomizerConstants){

        var randChoice = function(array){
            return array[Math.floor(Math.random() * array.length)];
        };

        return {
            getCompany: function(){
                return randChoice(randomizerConstants.companies);
            },
            getNoun: function(){
                return randChoice(randomizerConstants.nouns);
            },
            getLocation: function(){
                return randChoice(randomizerConstants.locations);
            }
        }
    }]);
