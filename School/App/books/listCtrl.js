(function () {

    angular.module("app")
        .controller("listCtrl", function ($scope, APIservice) {

            APIservice.query(function (Data) {
                $scope.dataList = Data;
            });

            $scope.edit = function (id) {
                $location.path("/form/" + (id));
            };

        });

})();