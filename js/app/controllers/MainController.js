function MainController($scope) {
  $scope.myinfo = {
    name: "Araf",
    email: "araf91@gmail.com",
    phone: "123456789",
  };
}

angular
      .module('app')
      .controller('MainController', MainController);
