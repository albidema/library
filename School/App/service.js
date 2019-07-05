//app.service("APIservice", function ($resource) {

//    return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });

//});

(function () {

    angular.module("app")
        .service("APIservice", function ($resource) {

            //var service = {
            //    getStudent: getStudent,
            //    //getAvengerCount: getAvengerCount,
            //    //getAvengers: getAvengers,
            //    //ready: ready
            //};

            //return service;

            //function getStudent() {
            //return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });
            return $resource("http://localhost:50115/api/books/:id", null, { "update": { method: "PUT" } });

            
            //}
            

        });

    

})();
