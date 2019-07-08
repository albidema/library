
(function () {

    angular.module("app")
        .service("tagService", function ($resource) {

            //var service = {
            //    getStudent: getStudent,
            //    //getAvengerCount: getAvengerCount,
            //    //getAvengers: getAvengers,
            //    //ready: ready
            //};

            //return service;

            //function getStudent() {
            //return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });
            return $resource("http://localhost:50115/api/tags/:id", null, { 'get': { method: 'GET', isArray: true } });


            //}


        });



})();
