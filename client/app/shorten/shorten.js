angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.loading = false;
  $scope.link = {};
  $scope.addLink = function() {
    $scope.loading = true;
    Links.addLink($scope.link).then(function(response) {
      $scope.loading = false;
    });
  };

  $scope.link.notValid = true;

});
