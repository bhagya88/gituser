'use strict';


angular.module('services', [])
  .factory('dataService', function ($http) {

    var data = {}; 
 
    
   
    data.getUserInfo = function (user) {
      var dataUrl; 
      dataUrl= 'https://api.github.com/users/'+user+'?callback=JSON_CALLBACK';
        return $http({
        method: 'JSONP',
        url: dataUrl
      });
    };
   
   
      data.getUserRepos = function (user) {
      var dataUrl; 
      dataUrl= 'https://api.github.com/users/'+user+'/repos?callback=JSON_CALLBACK';
        return $http({
        method: 'JSONP',
        url: dataUrl
      });
    };
   
   
   
      data.getUserFollowers = function (user) {
      var dataUrl; 
      dataUrl= 'https://api.github.com/users/'+user+'/followers?callback=JSON_CALLBACK';
        return $http({
        method: 'JSONP',
        url: dataUrl
      });
    };
      
    return data;
  });