
var app = angular.module('registrationApp', []);

    app.controller('RegistrationController', function($scope) {
      $scope.user = {};

      $scope.submitForm = function() {
        // Handle form submission logic here
        console.log('Form submitted:', $scope.user);
      };

      $scope.cancelForm = function() {
        // Handle cancel button logic here
        console.log('Form canceled.');
      };
    });