/**
 * Created by zenghong on 15/12/27.
 */
angular.module('agilisales').directive('agSigninPanel', ['$state', 'UserService', 'AuthService',
  function ($state, UserService, AuthService) {
    return {
      restrict: 'AE',
      templateUrl: 'directives/signin_panel/signin.client.view.html',
      replace: true,
      scope: {},
      controller: function ($scope, $element) {
        $scope.show = function () {
          $element.addClass('show');
        };

        $scope.hide = function () {
          $element.removeClass('show');
        };

        $scope.$on('show.signinPanel', function () {
          $scope.show();
        });

        $scope.info = {
          username: '13800001190',
          password: '111111'
        };

        $scope.goSignin = function () {
          UserService.signin($scope.info.username, $scope.info.password).then(function (data) {
            if (data.err) {
              return alert(data.err.zh_message);
            }
            AuthService.setToken(data.access_token);

            UserService.getMe().then(function (data) {
              if (data.err) {
                return alert(data.err.zh_message);
              }
              AuthService.setUser(data);
              $scope.hide();
              $state.go('menu.home');
            }, function (data) {

            });
            console.log(data);
          }, function (data) {
            console.log(data);
          });
        }
      }
    };
  }]);
