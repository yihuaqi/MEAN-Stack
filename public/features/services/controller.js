app.controller("ApplicationsEditCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    
    var appId = $routeParams.id;
    console.log("Edit id:" + $routeParams.id);
    ApplicationsService.selectOne(appId, function (response) {

        console.log("Select One:" + response);
        $scope.newApplication = response;
    });

    $scope.update = function () {
        console.log("Update id:" + $routeParams.id);
        console.log("Update name:" + $scope.newApplication.name);
        ApplicationsService.update(appId, $scope.newApplication, function (response) {
            window.history.go(-1);
            $scope.all();
        });

        
    };

    $scope.remove = function () {
        ApplicationsService.remove(appId, function () {
//            ApplicationsService.selectAll($scope.renderServiceClients);
            window.history.go(-1);
            $scope.all();
        });
        
    };



    

}]);

app.controller("ApplicationsNewCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    $scope.create = function () {
        
        ApplicationsService.create($scope.application, function () {
            //ApplicationsService.selectAll($scope.renderServiceClients);
            window.history.go(-1);
            $scope.all();
        });

    };
    

}]);

app.controller("ApplicationsListCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    $scope.renderServiceClients = function (response) {

        $scope.serviceClients = response;
    };

    $scope.all = function () {
        console.log("Get All!");
        ApplicationsService.selectAll($scope.renderServiceClients);
    };

    $scope.all();
}]);
