
(function () {

    angular.module("app")
        .service("APIservice", function ($resource) {

            return $resource("http://localhost:50115/books/:id", null, { "update": { method: "PUT" } });

        });

    

})();
