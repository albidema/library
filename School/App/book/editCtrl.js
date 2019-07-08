﻿
(function () {
    "use strict";

    angular
        .module('app')
        .controller('editCtrl', ['$scope', '$state', '$stateParams', 'toastr', 'APIservice', 'tagService', 'bookTagsService', EditController]);

    function EditController($scope, $state, $stateParams, toastr, APIservice, tagService, bookTagsService) {

        $scope.tags = tagService.get(); 

        $scope.someObject = {
            selectedTags: []
        };

        if ($stateParams.id) {
            $scope.user = APIservice.get({ id: $stateParams.id });
            $scope.someObject.selectedTags = bookTagsService.get({ id: $stateParams.id});
        }
           
        $scope.submit = function (user) {           
            user.bookTag = [];
            for (var i = 0; i < $scope.someObject.selectedTags.length; i++) {
                user.bookTag.push({ tagId: $scope.someObject.selectedTags[i].id, bookId: $stateParams.id});
            }

        APIservice.update({ id: $stateParams.id }, user, function () {
            $state.go("home", {}, { reload: true });
        });
    };

        $scope.removeStudent = function (id) {
            APIservice.delete({ id: id }, function () {

                $state.go("home", {}, { reload: true });

                toastr.success('Success!', 'Book was succesfully deleted!');

            }, function () {

                toastr.error('Success!', 'Book was succesfully deleted!');
            }
            );
        };

    }

}
)();