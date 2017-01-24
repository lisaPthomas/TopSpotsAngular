myApp = angular.module('myApp', []);

//controller named 'MainController'
myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {

    //Gets data from JSON file
    $http({
        method: 'GET',
        url: 'topspots.json'
    }).then(function successCallback(response) {
        //topspots now uses only the data inside JSON file
        $scope.topspots = response.data;

    }, function errorCallback(response) {
        $scope.topspots = response.data;
        // called asynchronously if an error occurs
        // or server returns response with an error status.






    });
    //create a new array for submit inputs
    $scope.spots = [];

    $scope.addRow = function() {
        $scope.spots.push({ 'name': $scope.name, 'description': $scope.description, 'location': $scope.location });
        $scope.name = '';
        $scope.description = '';
        $scope.location = '';

    };
}])
