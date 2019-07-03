app.service("APIservice", function ($resource) {

    return $resource("/api/Students/:id", null, { "update": { method: "PUT" } });

});
