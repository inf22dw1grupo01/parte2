'use strict';
const sql = require('../utils/dbconnect');

/**
 * Create Pokemon
 *
 * body Pokemon  (optional)
 * returns pokemon
 **/
exports.createPokemon = function(body) {
  return new Promise(function(resolve, reject) {
    sql.query("INSERT INTO pokemon (primeiro_tipo, nome,  segundo_tipo) Values(? , ? , ?)", [body.nome, body.primeiro_tipo, body.segundo_tipo], function (err, res) {
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
 * Delete Pokemon
 *
 * id_pokemon Long 
 * no response value expected for this operation
 **/
exports.deletePokemon = function(id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM pokemon WHERE id_pokemon = ?", [id_pokemon], function (err, res){
      if (err || !res.affectedRows) {
        console.log(err)
        console.log(res);
        reject();
      }
    }) 
  });
}


/**
 * Retrieve Pokemon
 *
 * returns List
 **/
exports.retrievePokemon = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemon",  function (err, res){
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
 * Retrieve Pokemon by ID
 *
 * id_pokemon Long 
 * returns pokemon
 **/
exports.retrievePokemonID = function(id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemon WHERE id_pokemon = ?", [id_pokemon], function (err, res){
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
 * Update Pokemon
 *
 * body Pokemon  (optional)
 * id_pokemon Long 
 * no response value expected for this operation
 **/
exports.updatePokemon = function(body,id_pokemon) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE pokemon set nome = ?, primeiro_tipo = ?, segundo_tipo = ? WHERE id_pokemon = ?", [body.nome, body.primeiro_tipo, body.segundo_tipo, id_pokemon], function (err, res){
      if (err) {
        console.log(err)
        reject(err);
      }
      else {
        console.log(res);
        resolve(id_pokemon);
      }
    }) 
  });
  }

