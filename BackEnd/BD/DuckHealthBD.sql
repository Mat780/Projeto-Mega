create database duckhealth
default character set utf8
default collate utf8_general_ci;

use duckhealth;

create table if not exists laudos(
	idLaudos int not null auto_increment primary key,
    data date not null,
    arquivo longblob not null,
    idpaciente int not null,
    idAdm int,
    idMedico int
)default charset = utf8;

create table if not exists administrador(
	idAdm int not null auto_increment primary key,
	nome varchar(250) not null,
	cpf varchar(14) not null unique,
    senha varchar(250) not null
)default charset = utf8;

create table if not exists paciente(
	idPaciente int not null auto_increment primary key,
    nome varchar(250) not null,
	cpf varchar(14) not null unique,
    senha varchar(250) not null
)default charset = utf8;

create table if not exists medico(
	idMedico int not null auto_increment primary key,
    especialidade varchar(250) not null,
    nome varchar(250) not null,
	cpf varchar(14) not null unique,
    senha varchar(250) not null
)default charset = utf8;

alter table laudos
add foreign key(idpaciente)
references paciente(idPaciente);

alter table laudos
add foreign key(idAdm)
references administrador(idAdm);

alter table laudos
add foreign key(idMedico)
references medico(idMedico);