(function() {
    'use strict';

    angular
        .module('app')
        .service('AppService', AppService);

    AppService.$inject = ['$http', '$q'];

    function AppService($http, $q) {
        var get = function(params) {
            return $q(function(resolve, reject) {
                $http.get('http://localhost:8000/server/list.php', {params: params}).success(function(data) {
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