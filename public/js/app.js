var app = angular.module('OnlineApps', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log("Route Provider !");
    $routeProvider.
    when('/applications/list', {
        templateUrl: 'features/services/list.html',
        controller:'ApplicationsListCtrl'
    }).
    when('/applications/new', {
        templateUrl: 'features/services/new.html',
        controller:'ApplicationsNewCtrl'
    }).
    when('/applications/edit/:id', {
        templateUrl: 'features/services/edit.html',
        controller:'ApplicationsEditCtrl'
    })
}]);