(function () {
    'use strict';

    function AppConfig($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
    }
    AppConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

    angular.module('app')
        .config(AppConfig);

}());
