
(function () {

    angular.module("app")
        .service("tagService", function ($resource) {
 
            return $resource("http://localhost:50115/tags/:id", null, { 'get': { method: 'GET', isArray: true } });

        });

})();
