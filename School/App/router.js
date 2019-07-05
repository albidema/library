(function () {

    angular.module("app")
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /list
        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state("home", {
                url: "/",
                templateUrl: "app/books/list.html",
                controller: "listCtrl"
            })
            .state("detail", {
                url: "/detail/{id}",
                templateUrl: "app/book/detail.html",
                controller: "detailCtrl"
            })
            .state("edit", {
                url: "/edit/{id}",
                templateUrl: "app/book/edit.html",
                controller: "editCtrl"
            })
            .state("add", {
                url: "/add",
                templateUrl: "app/book/add.html",
                controller: "addCtrl"
            });
            //.state("test", {
            //    url: "/test",
            //    templateUrl: "/ngView/test.html",
            //    controller: "testCtrl"
            //});



    });

})();

//app.config(function ($stateProvider, $urlRouterProvider) {

//    // For any unmatched url, redirect to /list
//    $urlRouterProvider.otherwise("/");

//    $stateProvider

//        .state("home", {
//            url: "/",
//            templateUrl: "/ngView/list.html",
//            controller: "listCtrl"
//        })
//        .state("detail", {
//            url: "/detail/{id}",
//            templateUrl: "/ngView/detail.html",
//            controller: "detailCtrl"
//        })
//        .state("form", {
//            url: "/form",
//            templateUrl: "/ngView/form.html",
//            controller: "formCtrl"
//        })
//            .state("test", {
//                url: "/test",
//                templateUrl: "/ngView/test.html",
//                controller: "testCtrl"
//            });



//});