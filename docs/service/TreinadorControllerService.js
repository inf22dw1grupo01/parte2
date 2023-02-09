'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Treinador
 *
 * body Treinador  (optional)
 * returns treinador
 **/
exports.createTreinador = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO treinador (nome) Values(?)", [body.nome], function (err, res) {
      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete Treinador
 *
 * id_treinador Long 
 * no response value expected for this operation
 **/
exports.deleteTreinador = function(id_treinador) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM treinador WHERE id_treinador = ?", [id_treinador], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Treinador
 *
 * returns List
 **/
exports.retrieveTreinador = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM treinador",  function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Retrieve Treinador by ID
 *
 * id_treinador Long 
 * returns treinador
 **/
exports.retrieveTreinadorID = function(id_treinador) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM treinador WHERE id_treinador = ?", [id_treinador], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(res[0]);
      }
    }) 
  });
}


/**
 * Update Treinador
 *
 * body Treinador  (optional)
 * id_treinador Long 
 * no response value expected for this operation
 **/
exports.updateTreinador = function(body,id_treinador) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE treinador set nome = ?  WHERE id_treinador = ?", [body.nome, id_treinador], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_treinador);
      }
    }) 
  });
  }

