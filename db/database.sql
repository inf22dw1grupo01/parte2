Drop schema if exists `pokemon`;
Create schema pokemon;
use pokemon;
create table equipas(id_equipa int primary key auto_increment, nome varchar(25));
create table treinador (id_treinador int primary key auto_increment, nome varchar(25));
create table tipo (id_tipo int primary key auto_increment, nome varchar(15));
create table pokemon (id_pokemon int primary key auto_increment, nome varchar(20), primeiro_tipo varchar(15), segundo_tipo varchar(15));

insert into `equipas` (nome) values ("Equipa David");
insert into `equipas` (nome) values ("Equipa Tiago");
insert into `equipas` (nome) values ("Equipa Gonçalo");

insert into `treinador`(nome) values ("David Brito");
insert into `treinador`(nome) values ("Tiago Pereira");
insert into `treinador`(nome) values ("Gonçalo Ramos");

insert into `tipo` (nome) values ("Normal");
insert into `tipo` (nome) values ("Fire");
insert into `tipo` (nome) values ("Water");
insert into `tipo` (nome) values ("Grass");
insert into `tipo` (nome) values ("Electric");
insert into `tipo` (nome) values ("Ice");
insert into `tipo` (nome) values ("Fighting");
insert into `tipo` (nome) values ("Poison");
insert into `tipo` (nome) values ("Ground");
insert into `tipo` (nome) values ("Flying");
insert into `tipo` (nome) values ("Psychic");
insert into `tipo` (nome) values ("Bug");
insert into `tipo` (nome) values ("Rock");
insert into `tipo` (nome) values ("Ghost");
insert into `tipo` (nome) values ("Dark");
insert into `tipo` (nome) values ("Dragon");
insert into `tipo` (nome) values ("Steel");
insert into `tipo` (nome) values ("Fairy");

insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Charizard", "Fire", "Flying");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Bulbasaur", "Grass", "Poison");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Squirtle", "Water", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Pikachu", "Electric", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Ninetales", "Fire", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Zubat", "Poison", "Flying");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Psyduck", "Water", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Arcanine", "Fire", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Kadabra", "Psychic", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Geodude", "Rock", "Ground");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Rhydon", "Ground", "Rock");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Gyarados", "Water", "Flying");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Ditto", "Normal", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Vaporean", "Water", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Snorlax", "Normal", "Normal");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Mewtwo", "Psychic", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Totodile", "Water", "None");
insert into `pokemon` (nome, primeiro_tipo, segundo_tipo) values ("Machop", "Fighting", "None");

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'

