'use strict';

/* jshint -W098 */
angular.module('mean.test').controller('TestController', ['$scope','$http', 'Global', 'Test',
  function($scope, $http, Global, Test) {
    $scope.global = Global;
    $scope.package = {
      name: 'test'
    };
    $scope.move = function(first, second, third) {
      $('.email').animate({
        left: first + "%"
      }, 400);
      $('.text').animate({
        left: second + "%"
      }, 400);
      $('.button').animate({
        left: third + "%"
      }, 400);
    }

    $scope.send = function() {
      $http({
        method  : 'POST',
        url     : '/sender',
        data    : $.param({msg: $scope.msg, txt: $scope.txt}),
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }

      }).success(function(data) {
        console.log(data);
      })
    }
  }
]);
