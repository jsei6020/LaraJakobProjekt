/**
 * Created by jseidler on 12.04.2017.
 */
angular.module( "MainApp" , [])
    .controller('TextCtrl', function ($scope) {
        $scope.InstructMessages = "You have a letter";
    })
    .controller('ProgCtrl', function ($scope) {
        $scope.Progress = ["This is Trogon. A text based RPG currently in development under Jakob Seidler.",
            "Character Naming", "Text Sections", "IntroductionLetter"
        ]
    })
    .controller('MainCtrl', ["$scope", function ($scope) {
        $scope.weiterButton = true;
        $scope.CNScreen = true;
        $scope.CharacterNameDisplay = "";
        $scope.instructionNumber = 0;
        $scope.ansagen = [];
        $scope.InstructMessages = "You have a letter";
        $scope.weiter1 = function(iN) {
            if(iN == 0) {
                $scope.Naming();
                $scope.instructionNumber++;
            }
            if(iN == 1) {
                $scope.Start();
                $scope.instructionNumber++;
            }
        };
        $scope.Naming = function() {
            $scope.TextInput = true;
            $scope.ansagen.push("Name your character: ");
        };
        $scope.Start = function() {
            $scope.CharacterName = $scope.InputField;
            $scope.InputField = "";
            $scope.TextInput = false;
            $scope.ansagen.push($scope.IMD1 = "Hello " + $scope.CharacterName);
            $scope.ansagen.push($scope.InstructMessages);
        };
        (function() {
           $scope.Button1 = "Weiter";

        }())
    }]);