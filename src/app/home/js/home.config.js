(function () {
    'use strict';

    function HomeConfig($stateProvider) {
        $stateProvider.state('base.home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: '/partials/home/templates/home'
                }
            }
        });
    }
    HomeConfig.$inject = ['$stateProvider'];

    angular.module('app.home')
        .config(HomeConfig);

}());
