app.factory("ApplicationsService", function ($http) {
    console.log("Controller Initialized");

    var create = function (application, callback) {

        $http.post("/applications", application).success(callback);
    };

    var selectOne = function (id, callback) {
        $http.get("/applications/" + id).success(callback);
    };

    var selectAll = function (callback) {
        $http.get("/applications").success(callback);
    };

    var update = function (id, application, callback) {
        console.log("What is the fuuuuuuuuuuuuuuuuck?!");
        console.log("Update:" + application.name);
        $http.put("/applications/" + id, application).success(callback);

        //$http.post("/applications", application).success(callback);
    };
    var remove = function (id, callback) {
        $http.delete("/applications/" + id).success(callback);
    };

    return {
        "create": create,
        "selectOne": selectOne,
        "selectAll": selectAll,
        "update": update,
        "remove": remove
    };
});