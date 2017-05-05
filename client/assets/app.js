var app = angular.module('app', ['ngRoute','ngCookies']);
  app.config(function ($routeProvider){
    $routeProvider
    .when('/dash',{
      templateUrl: '/../partials/dash.html'
    })
    .when('/',{
      templateUrl: '../partials/main.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
