CREATE DATABASE  IF NOT EXISTS `duckhealth` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `duckhealth`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: duckhealth
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `idAdm` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` int unsigned NOT NULL,
  `especialidade` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`idAdm`) USING BTREE,
  KEY `FK_administrador_usuario` (`idUser`),
  CONSTRAINT `FK_administrador_usuario` FOREIGN KEY (`idUser`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,1,'Cirurgiã'),(2,2,'Odonto'),(3,5,'Odontologia');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laudos`
--

DROP TABLE IF EXISTS `laudos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `laudos` (
  `idLaudos` int NOT NULL AUTO_INCREMENT,
  `nameLaudo` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `data` date NOT NULL,
  `arquivo` longblob NOT NULL,
  `idPaciente` int unsigned NOT NULL,
  `idMedico` int unsigned NOT NULL,
  PRIMARY KEY (`idLaudos`),
  KEY `FK_laudos_medico` (`idMedico`),
  KEY `FK_laudos_paciente` (`idPaciente`) USING BTREE,
  CONSTRAINT `FK_laudos_medico` FOREIGN KEY (`idMedico`) REFERENCES `medico` (`idMedico`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_laudos_paciente` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`idPaciente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laudos`
--

LOCK TABLES `laudos` WRITE;
/*!40000 ALTER TABLE `laudos` DISABLE KEYS */;
INSERT INTO `laudos` VALUES (1,'Cirurgia','2021-10-22',_binary '1',2,1),(2,'Cardiograma','2018-10-21',_binary '1',2,2),(3,'Odontologia','2019-01-10',_binary '1',3,3),(4,'Cardiograma','2020-05-22',_binary '1',3,2);
/*!40000 ALTER TABLE `laudos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `idMedico` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` int unsigned NOT NULL,
  `especialidade` varchar(250) NOT NULL,
  PRIMARY KEY (`idMedico`) USING BTREE,
  KEY `FK_medico_usuario` (`idUser`),
  CONSTRAINT `FK_medico_usuario` FOREIGN KEY (`idUser`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
INSERT INTO `medico` VALUES (1,1,'Cirurgiã'),(2,2,'Cardiologista'),(3,4,'Odontologia'),(4,5,'Comentarista');
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paciente`
--

DROP TABLE IF EXISTS `paciente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paciente` (
  `idPaciente` int unsigned NOT NULL AUTO_INCREMENT,
  `idUser` int unsigned NOT NULL DEFAULT '0',
  `medicoResp` int unsigned NOT NULL,
  PRIMARY KEY (`idPaciente`) USING BTREE,
  KEY `FK_paciente_usuario` (`idUser`),
  KEY `FK_paciente_medico` (`medicoResp`),
  CONSTRAINT `FK_paciente_medico` FOREIGN KEY (`medicoResp`) REFERENCES `medico` (`idMedico`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_paciente_usuario` FOREIGN KEY (`idUser`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paciente`
--

LOCK TABLES `paciente` WRITE;
/*!40000 ALTER TABLE `paciente` DISABLE KEYS */;
INSERT INTO `paciente` VALUES (1,3,1),(2,6,2),(3,7,1),(4,8,1),(5,9,1);
/*!40000 ALTER TABLE `paciente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passwordtokens`
--

DROP TABLE IF EXISTS `passwordtokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passwordtokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `token` varchar(200) NOT NULL DEFAULT '0',
  `user_id` int unsigned NOT NULL DEFAULT '0',
  `used` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_passwordtokens_usuario` (`user_id`),
  CONSTRAINT `FK_passwordtokens_usuario` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passwordtokens`
--

LOCK TABLES `passwordtokens` WRITE;
/*!40000 ALTER TABLE `passwordtokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `passwordtokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `cpf` varchar(11) NOT NULL DEFAULT '0',
  `nome` varchar(250) NOT NULL DEFAULT '0',
  `senha` varchar(250) NOT NULL DEFAULT '0',
  `role` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'00011122233','Kamys','$2b$10$7QCFT2xGhr6yIAiBSC.Hd.lWM//J4SXT7wfYvCwHT8TE/5WtzjpvG',2),(2,'00411122233','Raquel Freire','$2b$10$VFOi7B/dUKtrn1SamDSpDe.zimjQf89bM.Z7YpS1UGQ7lROtw1vsO',2),(3,'00000000001','Teste Paciente','$2b$10$4sUBt/Vah4Q6NrPMCEPCBebdo6qPujwep0uNyJoUR0DuuFhnuMWiC',0),(4,'00000000002','Teste Medico','$2b$10$8aoJvCHB5cDmpGhilNck2e0C7mhOyZpMLUgjirxUx0siH4n7pmPi6',1),(5,'00000000003','Teste Adm','$2b$10$b7D34fXO8zq7Yli8KrWKguWct07tZQwkWgeK2.GKIoUFdNqdP5EMi',2),(6,'05977634102','Giovanna Rodrigues Mendes','$2b$10$I8Ep81eWfRZM5oAscuQGIuml.avNPJ204KXxnCxzi4..sD6nf9Js2',0),(7,'09566170505','Joao Vitor Dutra Moitinho','$2b$10$n4ISHFpQ.ZgFFpGJV.CuueEsWwljLiUbIeHY.IL3FJ1l1wn3WjNN2',0),(8,'08469185101','Raul Leão Chagas','$2b$10$fa4B19L2gyyqCJEPEVCTRegr901ymzT7qGhX95Ixl1ue5BkACSh6e',0),(9,'07360676126','Matheus Felipe Alves Durães','$2b$10$xWS3fTgaXmFptvrn51h.L.3vfiQ8zoCuHC7Nih6k7NTJVdRyHbg6i',0);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-22 23:16:20
