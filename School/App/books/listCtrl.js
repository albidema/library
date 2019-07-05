(function () {

    angular.module("app")
        .controller("listCtrl", ['$scope', '$state', 'APIservice', 'toastr', ListController]);

    function ListController($scope, $state, APIservice, toastr) {

   
            APIservice.query(function (Data) {
                $scope.dataList = Data;
            });

            $scope.edit = function (id) {
                $location.path("/form/" + id);
            };

            $scope.removeStudent = function (id) {
                APIservice.delete({ id: id }, function () {

                    $state.reload();

                    toastr.success('Success!', 'Book was succesfully deleted!');
                    
                }, function () {
                    
                        toastr.error('Success!', 'Book was succesfully deleted!');
                }
                );
            };
         

        }

})();