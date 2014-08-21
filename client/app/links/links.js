angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;
  $scope.getLinks().then(function(response) {
    $scope.data.links = response;
     console.log('$scope.data is: ', $scope.data.links);
  });
  // $scope.data.$watch = $scope.getLinks();

    // $scope.data.links = [{},{},{}];
    // console.log('$scope.data.links is ', $scope.data.links);

  // $scope.getLinks();

});
