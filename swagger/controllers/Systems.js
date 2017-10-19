'use strict';

var url = require('url');


var Systems = require('./SystemsService');


module.exports.createSystem = function createSystem (req, res, next) {
  Systems.createSystem(req.swagger.params, res, next);
};

module.exports.deleteSystem = function deleteSystem (req, res, next) {
  Systems.deleteSystem(req.swagger.params, res, next);
};

module.exports.getSystemEssences = function getSystemEssences (req, res, next) {
  Systems.getSystemEssences(req.swagger.params, res, next);
};

module.exports.getSystems = function getSystems (req, res, next) {
  Systems.getSystems(req.swagger.params, res, next);
};

module.exports.getsystem = function getsystem (req, res, next) {
  Systems.getsystem(req.swagger.params, res, next);
};

module.exports.updateSystem = function updateSystem (req, res, next) {
  Systems.updateSystem(req.swagger.params, res, next);
};
