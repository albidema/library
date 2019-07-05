
(function () {
    "use strict";

    angular
        .module('app')
        .controller('addCtrl', ['$scope', '$state', '$stateParams', 'APIservice', AddController]);

    function AddController($scope, $state, $stateParams, APIservice) {

    $scope.submit = function (user) {
        APIservice.save(user, function () {
            $state.go("home", {}, { reload: true });
        });
    };


    }

}
)();