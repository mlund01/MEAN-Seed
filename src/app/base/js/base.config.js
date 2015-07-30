(function () {
    'use strict';

    function BaseConfig($stateProvider) {
        $stateProvider.state('base', {
            abstract: true,
            url: '',
            views: {
                '': {
                    templateUrl: '/partials/base/templates/base'
                },
                'top@base': {
                    templateUrl: '/partials/base/templates/base-top'
                },
                'right@base': {
                    templateUrl: '/partials/base/templates/base-right'
                },
                'bottom@base': {
                    templateUrl: '/partials/base/templates/base-bottom'
                },
                'left@base': {
                    templateUrl: '/partials/base/templates/base-left'
                }
            }
        });
    }
    BaseConfig.$inject = ['$stateProvider'];

    angular.module('app.base')
        .config(BaseConfig);

}());
