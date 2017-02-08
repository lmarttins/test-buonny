angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', 'AppService'];

function AppController($scope, AppService) {
    AppService.get().then(function(data) {
        console.log(data);
    }, function(error) {
        console.log(error);
    });
}