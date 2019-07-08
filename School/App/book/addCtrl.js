
(function () {
    "use strict";

    angular
        .module('app')
        .controller('addCtrl', ['$scope', '$state', '$stateParams', 'APIservice', 'tagService', AddController]);

    function AddController($scope, $state, $stateParams, APIservice, tagService) {

        $scope.tags = tagService.get();

        $scope.someObject = {
            selectedTags: []
        };

        $scope.submit = function (user) {
            user.bookTag = [];
            for (var i = 0; i < $scope.someObject.selectedTags.length; i++) {
                user.bookTag.push({ tagId: $scope.someObject.selectedTags[i].id });
            }

        APIservice.save(user, function () {
            $state.go("home", {}, { reload: true });
        });
    };


    }

}
)();