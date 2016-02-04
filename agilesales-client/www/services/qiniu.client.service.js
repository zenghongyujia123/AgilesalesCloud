angular.module('agilisales').factory('Qiniu', [
  '$cordovaFileTransfer',
  '$window',
  '$q',
  'HttpService',
  'ConfigService',
  function ($cordovaFileTransfer, $window,$q, HttpService, ConfigService) {
    var qiniuUploadAddress = 'http://upload.qiniu.com';
    var qiniuAddress = 'http://7xiwrb.com1.z0.glb.clouddn.com/';

    return {
      getUptoken: function () {
        return HttpService.get('/app/qiniu/uptoken',{});
      },

      uploadImage: function (imageUrl, token) {
        var q = $q.defer();
        $window.resolveLocalFileSystemURL(imageUrl, function (fileEntry) {
          var interUrl = fileEntry.toInternalURL();
          $cordovaFileTransfer.upload(encodeURI('http://upload.qiniu.com'), interUrl, {
            fileKey: 'file',
            fileName: interUrl.substr(interUrl.lastIndexOf('/') + 1),
            chunkedMode: false,
            trustAllHosts: true,
            mimeType: 'image/jpeg',
            params: {
              token: token
            }
          }, true).then(function (result) {
            console.log(result);
            q.resolve(qiniuAddress + JSON.parse(result.response).key);
          }, function (err) {
            q.reject(err);
          })
        });
        return q.promise;
      }
    }
  }]);
