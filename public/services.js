/*global angular*/
"use strict";
angular.module("floralApp")
    .constant("baseURL","/api/")
    .constant("authURL","/authenticate")
    .service('dataService', ['$resource', 'baseURL', 'authURL', function($resource, baseURL, authURL) {
        this.token = "";
        this.systemDAO = $resource(baseURL + 'system/:systemSN', {}, {
            save: {
                method: 'POST',
                headers: {
                    'x-access-token': this.token
                }
            }
        });
        
        this.getSystem = function(systemSN) {
            return this.systemDAO.get({ systemSN: systemSN }).$promise;
        };
        
        this.authenticate = function(username, password) {
            var data = {username: username, password: password};
            return $resource(authURL).save(data).$promise;
        };
    }])
