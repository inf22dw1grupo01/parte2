'use strict';

var utils = require('../utils/writer.js');
var EquipaController = require('../service/EquipaControllerService');

module.exports.createEquipa = function createEquipa (req, res, next, body) {
  EquipaController.createEquipa(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEquipa = function deleteEquipa (req, res, next, id_equipa) {
  EquipaController.deleteEquipa(id_equipa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEquipa = function retrieveEquipa (req, res, next) {
  EquipaController.retrieveEquipa()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveEquipaID = function retrieveEquipaID (req, res, next, id_equipa) {
  EquipaController.retrieveEquipaID(id_equipa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEquipa = function updateEquipa (req, res, next, body, id_equipa) {
  EquipaController.updateEquipa(body, id_equipa)
    .then(EquipaController.retrieveEquipa)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
