app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state("list", {
            url: "/list",
            templateUrl: "/ngView/list.html",
            controller: "listCtrl"
        })
        .state("list.detail", {
            url: "/detail/{id}",
            templateUrl: "/ngView/detail.html",
            controller: "detailCtrl"
        })
        .state("list.detail.form", {
            url: "/form",
            templateUrl: "/ngView/form.html",
            controller: "formCtrl"
        });

    // For any unmatched url, redirect to /list
    $urlRouterProvider.otherwise("/list");

});