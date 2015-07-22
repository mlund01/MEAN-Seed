(function () {
    'use strict';

    function BaseConfig($stateProvider) {
        $stateProvider.state('base', {
            abstract: true,
            url: '',
            views: {
                '': {
                    templateUrl: 'app/base/templates/base.html'
                },
                'top@base': {
                    templateUrl: 'app/base/templates/base.top.html'
                },
                'right@base': {
                    templateUrl: 'app/base/templates/base.right.html'
                },
                'bottom@base': {
                    templateUrl: 'app/base/templates/base.bottom.html'
                },
                'left@base': {
                    templateUrl: 'app/base/templates/base.left.html'
                }
            }
        });
    }
    BaseConfig.$inject = ['$stateProvider'];

    angular.module('app.base')
        .config(BaseConfig);

}());
