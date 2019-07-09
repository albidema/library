(function () {

    angular.module("app")
    .config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /list
        $urlRouterProvider.otherwise("/");

        $stateProvider

            .state("home", {
                url: "/",
                templateUrl: "app/book/list.html",
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
            
    });

})();

