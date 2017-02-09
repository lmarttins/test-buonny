angular
    .module('app')
    .controller('AppController', AppController);

AppController.$inject = ['$scope', 'AppService'];

function AppController($scope, AppService) {

    var parentIds = [], parentIdSum = 0;

    $scope.grandparents = [];

    $scope.parents = [];

    $scope.childrens = [];

    $scope.visibles = {
        parent: false,
        children: false
    };

    AppService.get({params: 'grandparents'})
        .then(function(data) {
            $scope.grandparents = data;
    }, function(error) {
        console.log(error);
    });
    
    $scope.grandClickable = function (id) {
        AppService.get({params: 'parents'})
            .then(function(data) {
                $scope.parents = data.filter(function (item) {
                    return item.avo_id == id
                });

                $scope.visibles.parent = true;
        });
    };

    $scope.parentClickable = function (id) {
        parentIds.push(id);
        parentIdSum += id;

        if (parentIds.length == 2) {
            console.log(parentIdSum);
            AppService.get({params: 'children'})
                .then(function(data) {
                    $scope.childrens = data.filter(function (childrenId) {
                        return childrenId.id == parentIdSum
                    });

                    $scope.visibles.children = true;
                });

            return false;
        }
    };
}