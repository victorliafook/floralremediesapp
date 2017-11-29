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
        
        dataService.getSystem('bach').then(function(res){
            if(res)
                $scope.resultList = res.essences;
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
                return 'alert-success';
            if($scope.dislikeSelection.indexOf(elem) >= 0)
                return 'alert-danger';
        };
        
        $scope.today = function(){
            return (new Date()).toLocaleDateString();  
        };
    }])
    .controller("adminController", ['$scope', 'dataService', '$window', function($scope, dataService, $window) {
        $scope.username = "";
        $scope.password = "";
        $scope.message = "";
        $scope.systemList = [];
        $scope.essenceList = [];
        
        $scope.formLogin = function(){
            dataService.authenticate($scope.username, $scope.password).then(function(data){

                if(data.success){
                    dataService.apitoken = data.token;
                    
                    $window.location.href = 'forms.html';
                }
                $scope.message = data.message;
            });
        };
        
        $scope.logout = function(){
            dataService.apitoken = null;
        };
        
        dataService.getSystem('bach').then(function(res){
            if(res)
                $scope.essenceList = res.essences;
            console.log(res);
        });
        
        
    }]);