/*global angular*/
'use strict';
//application written by Victor Lia Fook victorliafook@gmail.com
angular.module('floralApp', ['ngResource'])
    .controller("mainController", ['$scope', 'dataService', function($scope, dataService) {
        $scope.resultList = [];
        dataService.getSystemEssences('bach').then(function(res){
            if(res.data)
                $scope.resultList = res.data;
            console.log(res);
        });
        
    }]);