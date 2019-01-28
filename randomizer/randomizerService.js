angular.module('randomizerService', [])
    .factory('randomizerService', ['randomizerConstants', function(randomizerConstants){

        var randChoice = function(array){
            return array[Math.floor(Math.random() * array.length)];
        };

        return {
            getCompany: function(){
                return randChoice(randomizerConstants.companies);
            },
            getPreposition: function(){
                return randChoice(randomizerConstants.prepositions);
            },
            getNoun: function(){
                return randChoice(randomizerConstants.nouns);
            },
            getAudience: function(){
                return randChoice(randomizerConstants.audience);
            }
        }
    }]);
