angular.module('agilisales').factory('Qiniu', [
  '$cordovaFileTransfer',
  '$window',
  '$q',
  '$http',
  'Config',
  'DriverService',
  function ($cordovaFileTransfer, $window, $q, $http, Config, DriverService) {
    var qiniuAddress = 'http://liuyipublic.qiniudn.com/';

    return {
      getUptoken: function () {
        var q = $q.defer();

        $http.get(config.zzvanAddress + 'users/uptoken', {
          params:{
            access_token: DriverService.getInfo().access_token
          }
        })
          .success(function (result) {
            q.resolve(result.uptoken);
          })
          .error(function (err) {
            q.reject(err);
          });
        return q.promise;
      },

      uploadImage: function (imageUrl, uptoken) {
        var q = $q.defer();
        $window.resolveLocalFileSystemURI(imageUrl, function (fileEntry) {
          var interUrl = fileEntry.toInternalURL();
          $cordovaFileTransfer.upload(encodeURI('http://up.qiniu.com'), interUrl, {
            fileKey: 'file',
            fileName: interUrl.substr(interUrl.lastIndexOf('/') + 1),
            chunkedMode: false,
            trustAllHosts: true,
            mimeType: 'image/jpeg',
            params: {
              token: uptoken
            }
          }, true).then(function (result) {
            q.resolve(qiniuAddress + JSON.parse(result.response).key);
          }, function (err) {
            q.reject(err);
          })
        });
        return q.promise;
      }
    }
  }]);
