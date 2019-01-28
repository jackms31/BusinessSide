angular.module('randomizerService', [])
    .factory('randomizerService', ['randomizerConstants', function(randomizerConstants){

        var randChoice = function(array){
            return array[Math.floor(Math.random() * array.length)];
        };

        var shouldAdjectiveBeOn = function(){
            return Math.floor(Math.random() * 2) === 0;
        };

        var shouldLocationBeOn = function(){
            return Math.floor(Math.random() * 2) === 0;
        };

        return {
            getCompany: function(){
                return randChoice(randomizerConstants.companies);
            },
            getAdjective: function(){
                return shouldAdjectiveBeOn() ? randChoice(randomizerConstants.adjectives) : '';
            },
            getNoun: function(){
                return randChoice(randomizerConstants.nouns);
            },
            getLocation: function(){
                return shouldLocationBeOn() ? randChoice(randomizerConstants.locations) : '';
            }
        }
    }]);
