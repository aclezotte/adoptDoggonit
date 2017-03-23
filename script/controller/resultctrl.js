var app = angular.module("badaBingBadaBoom");

app.controller("resultCtrl", ["$scope", "adoptFactory", function ($scope, adoptFactory) {

    $scope.pets = [
{
"options": {
"option": {
"$t": "hasShots"
}
},
"status": {
"$t": "A"
},
"contact": {
"phone": {
"$t": "313-444-3835"
},
"state": {
"$t": "MI"
},
"address2": {},
"email": {
"$t": "PROUDintheD@gmail.com"
},
"city": {
"$t": "Detroit"
},
"zip": {
"$t": "48232"
},
"fax": {},
"address1": {
"$t": "P.O. 32036"
}
},
"age": {
"$t": "Baby"
},
"size": {
"$t": "L"
},
"media": {
"photos": {
"photo": [
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37559541/1/?bust=1488668926&width=60&-pnt.jpg",
"@id": "1"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37559541/1/?bust=1488668926&width=95&-fpm.jpg",
"@id": "1"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37559541/1/?bust=1488668926&width=500&-x.jpg",
"@id": "1"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37559541/1/?bust=1488668926&width=300&-pn.jpg",
"@id": "1"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37559541/1/?bust=1488668926&width=50&-t.jpg",
"@id": "1"
},
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37559541/2/?bust=1488668927&width=60&-pnt.jpg",
"@id": "2"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37559541/2/?bust=1488668927&width=95&-fpm.jpg",
"@id": "2"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37559541/2/?bust=1488668927&width=500&-x.jpg",
"@id": "2"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37559541/2/?bust=1488668927&width=300&-pn.jpg",
"@id": "2"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37559541/2/?bust=1488668927&width=50&-t.jpg",
"@id": "2"
},
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37559541/3/?bust=1488668927&width=60&-pnt.jpg",
"@id": "3"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37559541/3/?bust=1488668927&width=95&-fpm.jpg",
"@id": "3"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37559541/3/?bust=1488668927&width=500&-x.jpg",
"@id": "3"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37559541/3/?bust=1488668927&width=300&-pn.jpg",
"@id": "3"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37559541/3/?bust=1488668927&width=50&-t.jpg",
"@id": "3"
}
]
}
},
"id": {
"$t": "37559541"
},
"shelterPetId": {
"$t": "Samoa-PD-2017"
},
"breeds": {
"breed": {
"$t": "Boxer"
}
},
"name": {
"$t": "Samoa"
},
"sex": {
"$t": "F"
},
"description": {},
"mix": {
"$t": "yes"
},
"shelterId": {
"$t": "MI976"
},
"lastUpdate": {
"$t": "2017-03-04T23:08:48Z"
},
"animal": {
"$t": "Dog"
}
},
{
"options": {
"option": [
{
"$t": "hasShots"
},
{
"$t": "altered"
},
{
"$t": "housetrained"
}
]
},
"status": {
"$t": "A"
},
"contact": {
"phone": {
"$t": "313-444-3835"
},
"state": {
"$t": "MI"
},
"address2": {},
"email": {
"$t": "PROUDintheD@gmail.com"
},
"city": {
"$t": "Detroit"
},
"zip": {
"$t": "48232"
},
"fax": {},
"address1": {
"$t": "P.O. 32036"
}
},
"age": {
"$t": "Adult"
},
"size": {
"$t": "M"
},
"media": {
"photos": {
"photo": [
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37607220/1/?bust=1489240348&width=60&-pnt.jpg",
"@id": "1"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37607220/1/?bust=1489240348&width=95&-fpm.jpg",
"@id": "1"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37607220/1/?bust=1489240348&width=500&-x.jpg",
"@id": "1"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37607220/1/?bust=1489240348&width=300&-pn.jpg",
"@id": "1"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37607220/1/?bust=1489240348&width=50&-t.jpg",
"@id": "1"
},
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37607220/2/?bust=1489240349&width=60&-pnt.jpg",
"@id": "2"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37607220/2/?bust=1489240349&width=95&-fpm.jpg",
"@id": "2"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37607220/2/?bust=1489240349&width=500&-x.jpg",
"@id": "2"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37607220/2/?bust=1489240349&width=300&-pn.jpg",
"@id": "2"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37607220/2/?bust=1489240349&width=50&-t.jpg",
"@id": "2"
},
{
"@size": "pnt",
"$t": "http://photos.petfinder.com/photos/pets/37607220/3/?bust=1489240351&width=60&-pnt.jpg",
"@id": "3"
},
{
"@size": "fpm",
"$t": "http://photos.petfinder.com/photos/pets/37607220/3/?bust=1489240351&width=95&-fpm.jpg",
"@id": "3"
},
{
"@size": "x",
"$t": "http://photos.petfinder.com/photos/pets/37607220/3/?bust=1489240351&width=500&-x.jpg",
"@id": "3"
},
{
"@size": "pn",
"$t": "http://photos.petfinder.com/photos/pets/37607220/3/?bust=1489240351&width=300&-pn.jpg",
"@id": "3"
},
{
"@size": "t",
"$t": "http://photos.petfinder.com/photos/pets/37607220/3/?bust=1489240351&width=50&-t.jpg",
"@id": "3"
}
]
}
},
"id": {
"$t": "37607220"
},
"shelterPetId": {
"$t": "Piper-PD-2017"
},
"breeds": {
"breed": {
"$t": "Pit Bull Terrier"
}
},
"name": {
"$t": "Piper"
},
"sex": {
"$t": "F"
},
"description": {
"$t": "Piper is a petite girl at approximately 40 lbs.\nShe loves to go for car rides, run after her squeaky ball and cuddle. On cold nights you can find this girl snuggled under the covers with her favorite human.\nPiper is house trained and does well when left uncrated. She is not a chewer (though she will destroy her stuffed toys), not an excessive barker and loves her people.\nUnsure how she does with cats. Did well with foster dog after proper introduction.\nLearn more on our Facebook page: PROUD Detroit"
},
"mix": {
"$t": "yes"
},
"shelterId": {
"$t": "MI976"
},
"lastUpdate": {
"$t": "2017-03-11T13:52:32Z"
},
"animal": {
"$t": "Dog"
}
}
];
    // $scope.pets = adoptFactory.returnPets();
    console.log($scope.pets);

    $scope.choosePet = function (petName) {
        angular.forEach($scope.pets, function(value, key){
            if(value.name.$t === petName) {
                adoptFactory.petChoice(value);
            }
        });
    };

}]);
