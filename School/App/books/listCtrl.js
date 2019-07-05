(function () {

    angular.module("app")
        .controller("listCtrl", ['$scope', '$state','$stateParams', 'APIservice', ListController]);

    function ListController($scope, $state, $stateParams, APIservice) {

   
            APIservice.query(function (Data) {
                $scope.dataList = Data;
            });

            $scope.edit = function (id) {
                $location.path("/form/" + (id));
            };

            $scope.removeStudent = function (id) {
                APIservice.delete({ id: id }, function () {
                    //window.location.reload(true);
                    $state.reload();
                });
            };
         

        }

})();