var app = angular.module('loginApp', []);

    app.controller('LoginController', function($scope) {
      $scope.user = {};

      $scope.login = function() {
        // Handle login logic here
        console.log('Login clicked:', $scope.user);
      };
    });