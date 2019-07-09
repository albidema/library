
(function () {
    "use strict";

    angular
        .module('app')
        .controller('addCtrl', ['$scope', '$state', 'APIservice', 'tagService', AddController]);

    function AddController($scope, $state, APIservice, tagService) {

        $scope.tags = tagService.get();

        $scope.someObject = {
            selectedTags: []
        };

        $scope.submit = function (book) {
            book.bookTag = [];
            for (var i = 0; i < $scope.someObject.selectedTags.length; i++) {
                book.bookTag.push({ tagId: $scope.someObject.selectedTags[i].id });
            }

        APIservice.save(book, function () {
            $state.go("home", {}, { reload: true });
        });
    };


    }

}
)();