'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Equipa
 *
 * body Equipas  (optional)
 * returns equipas
 **/
exports.createEquipa = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO equipas (nome) Values(?)", [body.nome], function (err, res) {
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
 * Delete Equipa
 *
 * id_equipa Long 
 * no response value expected for this operation
 **/
exports.deleteEquipa = function(id_equipa) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM equipas WHERE id_equipa = ?", [id_equipa], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Equipa
 *
 * returns List
 **/
exports.retrieveEquipa = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM equipas",  function (err, res){
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
 * Retrieve Equipa by ID
 *
 * id_equipa Long 
 * returns equipas
 **/
exports.retrieveEquipaID = function(id_equipa) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM equipas WHERE id_equipa = ?", [id_equipa], function (err, res){
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
 * Update Equipa
 *
 * body Equipas  (optional)
 * id_equipa Long 
 * no response value expected for this operation
 **/
exports.updateEquipa = function(body,id_equipa) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE equipas set nome = ? WHERE id_equipa = ?", [body.nome, id_equipa], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_equipa);
      }
    }) 
  });
  }

