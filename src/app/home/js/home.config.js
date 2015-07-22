(function () {
    'use strict';

    function HomeConfig($stateProvider) {
        $stateProvider.state('base.home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'app/home/templates/home.html'
                }
            }
        });
    }
    HomeConfig.$inject = ['$stateProvider'];

    angular.module('app.home')
        .config(HomeConfig);

}());
