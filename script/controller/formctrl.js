var app = angular.module("badaBingBadaBoom");

app.controller("formCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

    $scope.questions = [
        { //kids?
            number: 0,
        	question:"It's Black Friday. Which deal are you most excited about?",
            answers: [
                {answer:"76% off all kids clothes and toys", weight: 0},
        	    {answer:"BOGO school supplies", weight: 2},
        	    {answer:"91.8% off all Apple Products", weight: 7},
                {answer:"I'm honestly down for all these sales!", weight: 5}
            ],
        	image: "images/blackfriday.jpg",
        	imageattribution:"",
        },
        { //what kind of housing does the user have?
            number: 1,
        	question:"Which best describes where you live?",
            answers: [
                {answer:"An affordable studio apartment in the city", weight: 0},
        	    {answer:"A bungalow in the 'burbs", weight: 3},
        	    {answer:"A fancy-schmancy mansion with a butler and all", weight: 5},
        	    {answer:"A farm", weight: 6}
            ],
        	image:"images/doghouse.jpg",
        	imageattribution:"",
        },
        { //what is the user's work schedule?
            number: 2,
        	question:"Which of these best decribes your after-work routine?",
            answers: [
                {answer:"I'm my own boss! I don't need no routines!", weight: 0},
            	{answer:"Cooking dinner and then watching some TV", weight: 2},
            	{answer:"Happy hour!!!!!!!!!!!!!!!!!!!", weight: 5},
            	{answer:"Hopping in the bed immediately! I'm beat!", weight: 6}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //how willing is the user to train?
            number: 3,
        	question:"How thin is your patience?",
            answers: [
                {answer:"Too thin for this quiz!", weight: 5},
            	{answer:"Eh, I'm kind of impatient", weight: 3},
            	{answer:"I'm fairly patient", weight: 1},
            	{answer:"I'm actually a really patient person!", weight: 0}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //how often would the user walk their dog?
            number: 4,
        	question:"What kind of shoes do you own?",
            answers: [
                {answer:"Nothing but heels, sis!", weight: 5},
            	{answer:"Loafers and like one pair of sneakers", weight: 3},
            	{answer:"Just picked up a pair of Nike Flyknits! Dope!", weight: 1},
            	{answer:"I have like 5 pairs of hiking boots", weight: 0}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //how much yard space does the user have?
            number: 5,
        	question:"How fond of cutting grass are you?",
            answers: [
                {answer:"What grass?", weight: 0},
            	{answer:"Not my favorite but I get it done", weight: 2},
                {answer:"Psh, I pay a lawncare service", weight: 4},
            	{answer:"Ride-on mowers for life!", weight: 5}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //how often does the user travel?
            number: 6,
        	question:"Choose a vacay:",
            answers: [
                {answer:"Flying out to some trendy island", weight: 3},
            	{answer:"Honestly, I'm cool staying home with snacks and Hulu", weight: 0},
            	{answer:"I go to my family reunion every year. Does that count?", weight: 2},
            	{answer:"Camping!", weight: 1}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //is the user disabled?
            number: 7,
        	question:"What are your thoughts on ableism?",
            answers: [
                {answer:"As a person with a disablity, I'm completely anti-ableism!", weight: 2},
            	{answer:"Yea, ableism ain't cool", weight: 0},
            	{answer:"I use Tumblr, so I've heard it's bad", weight: 0},
            	{answer:"What's ableism? (you're probably an ableist, bruh)", weight: 0}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //how active is the user?
            number: 8,
        	question:"You setting off the lunk alarm, or nah?",
            answers: [
                {answer:"The what???", weight: 0},
            	{answer:"Huh?", weight: 1},
            	{answer:"No, but I've seen some jerks do it", weight: 3},
            	{answer:"Bro, do you even lift!?", weight: 4}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //is the user an extrovert or an introvert?
            number: 9,
        	question:"Which Beyoncé are you?",
            answers: [
                {answer:"Beyoncé as Lily in Fighting Temptations", weight: 1},
            	{answer:"Beyoncé as Carmen in Carmen: A Hip-Hopera", weight: 2},
            	{answer:"Beyoncé as Deena Jones in Dreamgirls", weight: 0},
            	{answer:"Beyoncé as her real life self", weight: 3}
            ],
        	image:"",
        	imageattribution:"",
        },
        { //does the user have a pet gender preference?
            number: 10,
          question:"Choose a Disney dog:",
          answers: [
            {answer:"Perdita", weight: 0},
            {answer:"Lady", weight: 0},
            {answer:"Pongo", weight: 1},
            {answer:"Tramp", weight: 1}
          ],
          image:"",
          imageattribution:"",
        }
    ];

    $scope.activeQ = 0;

    $scope.answers = [];

    $scope.setAnswer = function (question, answer) {
        $scope.answers[question] = answer;
        $scope.activeQ ++;

        if ($scope.activeQ > 10) {
            $scope.next();
        }
    };

    $scope.sex = "";
    $scope.size = "";
    $scope.age = "";
    $scope.sizePts = 0;
    $scope.agePts = 0;

    $scope.next = function () {
        if ($scope.answers[10] === 0) {
            $scope.sex = "F";
        } else {
            $scope.sex = "M";
        }

        $scope.sizePts = $scope.answers[0]
                        + $scope.answers[1]
                        + $scope.answers[5]
                        + $scope.answers[8]
                        + $scope.answers[9];

        $scope.agePts = $scope.answers[2]
                        + $scope.answers[3]
                        + $scope.answers[4]
                        + $scope.answers[6]
                        + $scope.answers[7];

        if ($scope.sizePts < 6) {
            $scope.size = "S";
        } else if ($scope.sizePts < 13) {
            $scope.size = "M";
        } else if ($scope.sizePts < 19) {
            $scope.size = "L";
        } else {
            $scope.size = "XL";
        }

        if ($scope.agePts < 6) {
            $scope.age = "Baby";
        } else if ($scope.agePts < 13) {
            $scope.age = "Young";
        } else if ($scope.age < 19) {
            $scope.age = "Adult";
        } else {
            $scope.age = "Senior";
        }

        console.log($scope.sex);
        console.log($scope.size);
        console.log($scope.age);

        adoptFactory.getPets($scope.sex, $scope.age, $scope.size);

        $location.path("/result");
    };

}]);
//bug fix
