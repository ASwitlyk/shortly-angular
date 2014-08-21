angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  // Your code here
  $scope.data = {};
  $scope.getLinks = Links.getLinks;
  $scope.getLinks().then(function(response) {
    $scope.data.links = response;
     // console.log('$scope.data is: ', $scope.data.links);
  });

});
