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
      link: function ($scope, $element) {
        $scope.show = function () {
          $element.addClass('show');
        };

        $scope.show();

        $scope.hide = function () {
          $element.removeClass('show');
        };

        $scope.$on('show.signinPanel', function () {
          $scope.show();
        });

        $scope.info = {
          username: '13800001757',
          password: '111111'
        };

        function getPeopleUnderlings() {
          UserService.getPeopleUnderlings().then(function (data) {
            console.log(data);
          }, function (data) {
            console.log(data);
          });
        }

        $scope.clickSignin = function () {
          return $element.addClass('do');
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

              getPeopleUnderlings();


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
