
(function () {

    angular.module("app")
        .service("bookTagsService", function ($resource) {

            return $resource("http://localhost:50115/booktags/:id", null, { 'get': { method: 'GET', isArray: true } });

        });
})();
