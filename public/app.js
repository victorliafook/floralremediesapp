/*global angular*/
'use strict';
//application written by Victor Lia Fook victorliafook@gmail.com
angular.module('floralApp', ['ngResource'])
    .controller("mainController", ['$scope', 'dataService', function($scope, dataService) {
        $scope.sl_number = 3;
        
        $scope.resultList = [];
        $scope.likeSelection = [];
        $scope.dislikeSelection = [];
        $scope.page = "selection";
        
        dataService.getSystemEssences('bach').then(function(res){
            //if(res.data)
                $scope.resultList = res;
            console.log(res);
        });
        
        $scope.selectOne = function(elem){
            if($scope.likeSelection.length === $scope.sl_number && $scope.dislikeSelection.length === $scope.sl_number)
                return;
            if($scope.likeSelection.indexOf(elem) >= 0 || $scope.dislikeSelection.indexOf(elem) >= 0)
                return;
            ($scope.likeSelection.length < $scope.sl_number) ? $scope.likeSelection.push(elem) : $scope.dislikeSelection.push(elem);
            if($scope.likeSelection.length === $scope.sl_number && $scope.dislikeSelection.length === $scope.sl_number){
                $scope.page = 'result';
            }
        };
        
        $scope.verifyChoice = function(elem){
            if($scope.likeSelection.indexOf(elem) >= 0)
                return 'like';
            if($scope.dislikeSelection.indexOf(elem) >= 0)
                return 'dislike';
        };
        
        $scope.today = function(){
            return (new Date()).toLocaleDateString();  
        };
    }]);