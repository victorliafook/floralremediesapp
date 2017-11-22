/*global angular*/
"use strict";
angular.module("floralApp")
    .constant("baseURL","/api/")
    .constant("authURL","/authenticate")
    .service('dataService', ['$resource', 'baseURL', 'authURL', function($resource, baseURL, authURL) {
        this.token = "";
        this.getSystemEssences = function(systemSN) {
            return $resource(baseURL + 'system/:systemSN/essences', {systemSN : systemSN}, {
                save: {
                    method: 'POST',
                    headers: {
                        'x-access-token': this.token
                    }
                }}).query().$promise;
        };
        
        this.authenticate = function(username, password) {
            var data = {username: username, password: password};
            return $resource(authURL).save(data).$promise;
        };
    }])
