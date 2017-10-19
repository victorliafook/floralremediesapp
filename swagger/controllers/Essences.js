'use strict';

var url = require('url');


var Essences = require('./EssencesService');


module.exports.createEssence = function createEssence (req, res, next) {
  Essences.createEssence(req.swagger.params, res, next);
};

module.exports.deleteEssence = function deleteEssence (req, res, next) {
  Essences.deleteEssence(req.swagger.params, res, next);
};

module.exports.getEssence = function getEssence (req, res, next) {
  Essences.getEssence(req.swagger.params, res, next);
};

module.exports.getSystemEssences = function getSystemEssences (req, res, next) {
  Essences.getSystemEssences(req.swagger.params, res, next);
};

module.exports.updateEssence = function updateEssence (req, res, next) {
  Essences.updateEssence(req.swagger.params, res, next);
};
