﻿//(function () {

//    angular.module("app")
//        .controller("listCtrl", function ($scope, APIservice) {

//        APIservice.query(function (Data) {
//            $scope.dataList = Data;
//        });

//        $scope.edit = function (id) {
//            $location.path("/form/" + (id));
//        };

//    });

//})();

//app.controller("detailCtrl", function ($scope, $stateParams, APIservice) {

   
//    $scope.dataDetail = APIservice.get({ id: $stateParams.id });
    

//});

//app.controller("formCtrl", function ($scope, $state, $stateParams, APIservice) {

//    if ($stateParams.id)
//        $scope.user = APIservice.get({ id: $stateParams.id });

//    $scope.submit = function (user) {
//        APIservice.update({ id: $stateParams.id }, user, function () {
//            $state.go("list", {}, { reload: true });
//        });
//    };
//});

//app.controller("testCtrl", function ($scope, APIservice) {


//});

