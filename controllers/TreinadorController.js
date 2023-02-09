'use strict';

var utils = require('../utils/writer.js');
var TreinadorController = require('../service/TreinadorControllerService');

module.exports.createTreinador = function createTreinador (req, res, next, body) {
  TreinadorController.createTreinador(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTreinador = function deleteTreinador (req, res, next, id_treinador) {
  TreinadorController.deleteTreinador(id_treinador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTreinador = function retrieveTreinador (req, res, next) {
  TreinadorController.retrieveTreinador()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveTreinadorID = function retrieveTreinadorID (req, res, next, id_treinador) {
  TreinadorController.retrieveTreinadorID(id_treinador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTreinador = function updateTreinador (req, res, next, body, id_treinador) {
  TreinadorController.updateTreinador(body, id_treinador)
    .then(TreinadorController.retrieveTreinador)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
