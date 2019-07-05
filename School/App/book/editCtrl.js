
(function () {
    "use strict";

    angular
        .module('app')
        .controller('editCtrl', ['$scope', '$state', '$stateParams', 'APIservice', EditController]);

    function EditController($scope, $state, $stateParams, APIservice) {

        if ($stateParams.id)
                $scope.user = APIservice.get({ id: $stateParams.id });

    $scope.submit = function (user) {
        APIservice.update({ id: $stateParams.id }, user, function () {
            $state.go("home", {}, { reload: true });
        });
    };

        $scope.removeStudent = function (id) {
            APIservice.delete({ id: id },  function () {
                $state.go("home", {}, { reload: true });
            });
        }

    }

}
)();