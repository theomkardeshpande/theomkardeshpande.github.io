(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    Check.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.name = "";
        $scope.display = "";
        $scope.Check = function () {


            let Strings = $scope.name.split(',');
            var stringlen = Strings.length;

            var counter = 0;
            for (var i = 0; i < stringlen; i++) {
                if (Strings[i] != false) {
                    counter++;
                }
            }

            if (counter == 0) {
                $scope.display = "Enter data first";
            }
            else if (stringlen > 0 && stringlen <= 3) {
                $scope.display = "Enjoy..!";
            }
            else {
                $scope.display = "Too Much..!";
            }
        };

    }
}
)();