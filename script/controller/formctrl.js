var app = angular.module("badaBingBadaBoom");

app.controller("formCtrl", ["$scope", "adoptFactory", "$location", function($scope, adoptFactory, $location){

    $scope.questions = [
        { //kids?
            number: 0,
        	question:"It's Black Friday, which deal are you most excited about?",
        	answer1:"76% off all kids clothes and toys",
        	answer2:"BOGO school supplies",
        	answer3:"91.8% off all Apple Products",
        	answer4:"I'm honestly down for all these sales!",
        	image:"",
        	imageattribution:"",
        },
        { //what kind of housing does the user have?
            number: 1,
        	question:"Which best describes where you live?",
        	answer1:"An affordable studio apartment in the city",
        	answer2:"A bungalow in the 'burbs",
        	answer3:"A fancy-schmancy mansion with a butler and all",
        	answer4:"A farm",
        	image:"",
        	imageattribution:"",
        },
        { //what is the user's work schedule?
            number: 2,
        	question:"Which of these best decribes your after-work routine?",
        	answer1:"I'm my own boss! I don't need no routines!",
        	answer2:"Cooking dinner and then watching some TV",
        	answer3:"Happy hour!!!!!!!!!!!!!!!!!!!",
        	answer4:"Hopping in the bed immediately! I'm beat!",
        	image:"",
        	imageattribution:"",
        },
        { //how willing is the user to train?
            number: 3,
        	question:"How thin is your patience?",
        	answer1:"Too thin for this quiz!",
        	answer2:"Eh, I'm kind of impatient",
        	answer3:"I'm fairly patient",
        	answer4:"I'm actually a really patient person!",
        	image:"",
        	imageattribution:"",
        },
        { //how often would the user walk their dog?
            number: 4,
        	question:"What kind of shoes do you own?",
        	answer1:"Nothing but heels, sis!",
        	answer2:"Loafers and like one pair of sneakers",
        	answer3:"Just picked up a pair of Nike Flynits! Dope!",
        	answer4:"I have like 5 pairs of hiking boots",
        	image:"",
        	imageattribution:"",
        },
        { //how much yard space does the user have?
            number: 5,
        	question:"How fond of cutting grass are you?",
        	answer1:"What grass?",
        	answer2:"Not my favorite but I get it done",
        	answer3:"Psh, I pay a lawncare service",
        	answer4:"Ride-on mowers for life!",
        	image:"",
        	imageattribution:"",
        },
        { //how often does the user travel?
            number: 6,
        	question:"Choose a vacay:",
        	answer1:"Flying out to some trendy island",
        	answer2:"Honestly, I'm cool staying home with snacks and Hulu",
        	answer3:"I go to my family reunion every year. Does that count?",
        	answer4:"Camping!",
        	image:"",
        	imageattribution:"",
        },
        { //is the user disabled?
            number: 7,
        	question:"What are your thoughts on ableism?",
        	answer1:"As a person with a disablity, I'm complete anti-ableism!",
        	answer2:"Yea, ableism ain't cool",
        	answer3:"I use Tumblr, so I've heard it's bad",
        	answer4:"What's ableism? (you're probably an ableist, bruh)",
        	image:"",
        	imageattribution:"",
        },
        { //how active is the user?
            number: 8,
        	question:"You setting off the lunk alarm, or nah?",
        	answer1:"The what???",
        	answer2:"Huh?",
        	answer3:"No, but I've seen some jerks do it",
        	answer4:"Bro, do you even lift!?",
        	image:"",
        	imageattribution:"",
        },
        { //is the user an extrovert or an introvert?
            number: 9,
        	question:"Which Beyoncé are you?",
        	answer1:"Beyoncé as Lily in Fighting Temptations",
        	answer2:"Beyoncé as Carmen in Carmen: A Hip-Hopera",
        	answer3:"Beyoncé as Deena Jones in Dreamgirls",
        	answer4:"Beyoncé as her real life self",
        	image:"",
        	imageattribution:"",
        },
        { //does the user have a pet gender preference?
            number: 10,
        	question:"Pick a color:",
        	answer1:"Pink",
        	answer2:"Navy blue",
        	answer3:"Green",
        	answer4:"Purple",
        	image:"",
        	imageattribution:"",
        }
    ];

    $scope.answers = [];

    $scope.setAnswer = function (question, answer) {
        console.log(question);
        console.log(answer);
        $scope.answers[question] = answer;
        console.log($scope.answers);
    };

    $scope.next = function () {
        $location.path("/result");
    };

}]);
