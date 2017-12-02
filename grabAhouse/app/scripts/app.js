'use strict';

/**
 * @ngdoc overview
 * @name dynamicFormApp
 * @description
 * # dynamicFormApp
 *
 * Main module of the application.
 */
angular
  .module('dynamicFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
    
      .otherwise({
        redirectTo: '/'
      });
  });
