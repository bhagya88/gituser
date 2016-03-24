'use strict';

/**
 * @ngdoc overview
 * @name gitUserApp
 * @description
 * # gitUserApp
 *
 * Main module of the application.
 */
angular
  .module('gitUserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'controllers',
    'services'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
