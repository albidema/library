//app.service("APIservice", function ($resource) {

//    return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });

//});

(function () {

    angular.module("app")
        .service("APIservice", function ($resource) {

            return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });

        });

})();
