var app = angular.module("badaBingBadaBoom");

app.factory("adoptFactory", function ($http, $route) {

    var petsObject;

    var pet = {};

    var zip = "";

    return {

        getZip: function (userZip) {
            zip = userZip;
            console.log(zip);
        },

        getPets: function (sex, age, size) {
            var promise = $http({
                    method: "GET",
                    url: "http://api.petfinder.com/pet.find?key=ad9636f9b9a6415e1aaffb6e55316407&animal=dog&location=" + zip + "&sex=" + sex + "&age=" + age + "&size=" + size + "&count=5&output=full&format=json"
                }).then(function successCallback(response) {
                    petsObject = response.data.petfinder.pets.pet;
                    console.log(petsObject);
                    $route.reload();
                });

            return promise;
        },

        returnPets: function () {
            return petsObject;
        },

        petChoice: function (chosenPet) {
            pet = chosenPet;
            console.log(pet);
        },

        returnDisplayPet: function () {
            return pet;
        }

    };

});
