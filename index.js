var app = angular.module("myList", []);
      app.controller("myController", function ($scope) {
        $scope.products = ["Milk", "Bread", "Eggs"];
        $scope.addItem = function () {
          $scope.errortext = "";
          if (!$scope.addData) {
            return;
          }
          if ($scope.products.indexOf($scope.addData) == -1) {
              console.log("check Here->", $scope.products.indexOf($scope.addData))
            $scope.products.push($scope.addData);
            $scope.errortext = "";
            $scope.addData = "";
          } else {
            $scope.errortext = "This item exists.";
          }
        };
        $scope.removeItem = function (x) {
          $scope.products.splice(x, 1);
        };
      });