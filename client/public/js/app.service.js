(function() {
    'use strict';

    angular
        .module('app')
        .service('AppService', AppService);

    AppService.$inject = ['$http', '$q'];

    function AppService($http, $q) {
        var get = function(params) {
            return $q(function(resolve, reject) {
                $http.jsonp('http://localhost:8000/server/list.php').success(function(data) {
                    resolve(data);
                }).error(function() {
                    reject('Fail request.');
                });
            });
        };

        return {
            get : get
        }
    }
})();