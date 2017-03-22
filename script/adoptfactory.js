var app = angular.module("badaBingBadaBoom");

app.factory("adoptFactory", function ($http) {
    
    var petsObject = [];
    
    return {
        
        getPets: function (sex, age, size) {
            var promise = $http({
                    method: "GET",
                    url: "http://api.petfinder.com/pet.find?key=ad9636f9b9a6415e1aaffb6e55316407&animal=dog&location=48226&sex=" + sex + "&age=" + age + "&size=" + size + "&count=5&co&output=full&format=json"
                }).then(function successCallback(response) {
                    petsObject = response.data.petfinder.pets.pet;
                    console.log(petsObject);
                });

            return promise;
        },
        
        returnPets: function () {
            return petsObject;
        }
        
    };
    
});