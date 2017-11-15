/*global angular*/
"use strict";
angular.module("floralApp")
    .constant("baseURL","api/")
    .service('dataService', ['$resource', 'baseURL', function($resource, baseURL) {
        this.getSystemEssences = function(systemSN) {
            return $resource(baseURL + 'system/:systemSN/essences', {systemSN : systemSN}).query().$promise;
        };
    }])
