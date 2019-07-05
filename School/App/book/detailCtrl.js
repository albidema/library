
(function () {
    "use strict";

    angular
        .module('app')
        .controller('detailCtrl', ['$scope', '$stateParams', 'APIservice', DetailController]);

    function DetailController($scope, $stateParams, APIservice) {

        $scope.dataDetail = APIservice.get({ id: $stateParams.id });

    }

}
)();
