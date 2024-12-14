-- MySQL dump 10.13  Distrib 8.3.0, for Win64 (x86_64)
--
-- Host: localhost    Database: fish2
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boundaries`
--

DROP TABLE IF EXISTS `boundaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boundaries` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boundaries`
--

LOCK TABLES `boundaries` WRITE;
/*!40000 ALTER TABLE `boundaries` DISABLE KEYS */;
INSERT INTO `boundaries` VALUES (1,'Non-boundary Waters','2024-12-13 06:07:52','2024-12-13 06:07:52'),(2,'Boundary Waters Between NB and Maine','2024-12-13 06:07:52','2024-12-13 06:07:52');
/*!40000 ALTER TABLE `boundaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
INSERT INTO `cache` VALUES ('matthewallanmacpherson@gmail.com|127.0.0.1:timer','i:1734055927;',1734055927),('matthewallanmacpherson@gmail.com|127.0.0.1','i:2;',1734055927);
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fish`
--

DROP TABLE IF EXISTS `fish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fish` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fish`
--

LOCK TABLES `fish` WRITE;
/*!40000 ALTER TABLE `fish` DISABLE KEYS */;
INSERT INTO `fish` VALUES (1,'Brook Trout','2024-12-13 06:07:52','2024-12-13 06:07:52'),(2,'Brown Trout','2024-12-13 06:07:52','2024-12-13 06:07:52'),(3,'Rainbow Trout','2024-12-13 06:07:52','2024-12-13 06:07:52'),(4,'Lake Trout','2024-12-13 06:07:52','2024-12-13 06:07:52'),(5,'Landlocked Salmon','2024-12-13 06:07:53','2024-12-13 06:07:53'),(6,'Smallmouth Bass','2024-12-13 06:07:53','2024-12-13 06:07:53'),(7,'Burbot','2024-12-13 06:07:54','2024-12-13 06:07:54'),(8,'Chain pickerel','2024-12-13 06:07:54','2024-12-13 06:07:54'),(9,'Eel','2024-12-13 06:07:54','2024-12-13 06:07:54'),(10,'Gaspereau','2024-12-13 06:07:54','2024-12-13 06:07:54'),(11,'Rainbow smelt','2024-12-13 06:07:54','2024-12-13 06:07:54'),(12,'Shad','2024-12-13 06:07:54','2024-12-13 06:07:54'),(13,'Striped bass','2024-12-13 06:07:54','2024-12-13 06:07:54'),(14,'Whitefish','2024-12-13 06:07:54','2024-12-13 06:07:54'),(15,'White perch','2024-12-13 06:07:54','2024-12-13 06:07:54'),(16,'Yellow perch','2024-12-13 06:07:54','2024-12-13 06:07:54'),(17,'Muskellunge','2024-12-14 00:10:13','2024-12-14 00:10:13');
/*!40000 ALTER TABLE `fish` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fish_categories`
--

DROP TABLE IF EXISTS `fish_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fish_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fish_categories`
--

LOCK TABLES `fish_categories` WRITE;
/*!40000 ALTER TABLE `fish_categories` DISABLE KEYS */;
INSERT INTO `fish_categories` VALUES (1,'Trout','2024-12-13 06:07:52','2024-12-13 06:07:52'),(2,'Salmon','2024-12-13 06:07:53','2024-12-13 06:07:53'),(3,'Bass','2024-12-13 06:07:53','2024-12-13 06:07:53'),(4,'Non-Sport Fish','2024-12-13 06:07:54','2024-12-13 06:07:54');
/*!40000 ALTER TABLE `fish_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fish_limits`
--

DROP TABLE IF EXISTS `fish_limits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fish_limits` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `season_start` date NOT NULL,
  `season_end` date NOT NULL,
  `bag_limit` int NOT NULL,
  `minimum_size` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `maximum_size` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `location_id` bigint unsigned NOT NULL,
  `fish_category_id` bigint unsigned NOT NULL,
  `fish_id` bigint unsigned DEFAULT NULL,
  `boundary_id` bigint unsigned DEFAULT NULL,
  `waters_category_id` bigint unsigned DEFAULT NULL,
  `water_id` bigint unsigned DEFAULT NULL,
  `tidal_category_id` bigint unsigned DEFAULT NULL,
  `fishing_method_id` bigint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fish_limits_location_id_foreign` (`location_id`),
  KEY `fish_limits_fish_category_id_foreign` (`fish_category_id`),
  KEY `fish_limits_fish_id_foreign` (`fish_id`),
  KEY `fish_limits_boundary_id_foreign` (`boundary_id`),
  KEY `fish_limits_waters_category_id_foreign` (`waters_category_id`),
  KEY `fish_limits_water_id_foreign` (`water_id`),
  KEY `fish_limits_tidal_category_id_foreign` (`tidal_category_id`),
  KEY `fish_limits_fishing_method_id_foreign` (`fishing_method_id`)
) ENGINE=MyISAM AUTO_INCREMENT=234 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fish_limits`
--

LOCK TABLES `fish_limits` WRITE;
/*!40000 ALTER TABLE `fish_limits` DISABLE KEYS */;
INSERT INTO `fish_limits` VALUES (1,'2024-04-15','2024-09-15',5,'10cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,1,1,1,NULL,NULL,NULL),(2,'2024-04-15','2024-09-15',2,'15cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,2,1,1,NULL,NULL,NULL),(3,'2024-04-15','2024-09-15',5,'15cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,3,1,1,NULL,NULL,NULL),(4,'2024-04-15','2024-09-15',2,'45cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,4,1,1,NULL,NULL,NULL),(5,'2024-05-01','2024-09-15',5,'10cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,1,1,2,NULL,NULL,NULL),(6,'2024-05-01','2024-09-15',2,'15cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,2,1,2,NULL,NULL,NULL),(7,'2024-05-01','2024-09-15',5,'15cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,3,1,2,NULL,NULL,NULL),(8,'2024-05-01','2024-09-15',2,'45cm',NULL,NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,1,4,1,2,NULL,NULL,NULL),(9,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,2,5,1,1,58,NULL,NULL),(10,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,2,5,1,2,59,NULL,NULL),(11,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,2,5,1,2,60,NULL,NULL),(12,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,2,5,1,2,61,NULL,NULL),(13,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,2,5,1,2,62,NULL,NULL),(14,'2024-04-15','2024-09-15',5,'10cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,NULL,NULL,NULL),(15,'2024-05-01','2024-09-15',5,'10cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,NULL,NULL,NULL),(16,'2024-04-15','2024-10-15',5,'10cm','60cm','from the bridge  in French Village upstream to  McGonagle Brook','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,63,NULL,NULL),(17,'2024-04-15','2024-10-15',5,'10cm','60cm','from the  bridge on Bloomfield Station  Road upstream to the road  bridge at McCully station (grid  reference 1173 7051)','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,64,NULL,NULL),(18,'2024-04-15','2024-10-15',5,'10cm','60cm','from Route 105  upstream to the CN railway  bridge at Barton','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,65,NULL,NULL),(19,'2024-04-15','2024-10-15',5,'10cm','60cm','from the  Durham Bridge upstream to the  East Branch Nashwaak River','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,66,NULL,NULL),(20,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,67,NULL,NULL),(21,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,68,NULL,NULL),(22,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,69,NULL,NULL),(23,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,70,NULL,NULL),(24,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,71,NULL,NULL),(25,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,72,NULL,NULL),(26,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,73,NULL,NULL),(27,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,74,NULL,NULL),(28,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,75,NULL,NULL),(29,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,76,NULL,NULL),(30,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,77,NULL,NULL),(31,'2024-05-01','2024-06-30',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,78,NULL,NULL),(32,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,67,NULL,NULL),(33,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,68,NULL,NULL),(34,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,69,NULL,NULL),(35,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,70,NULL,NULL),(36,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,71,NULL,NULL),(37,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,72,NULL,NULL),(38,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,73,NULL,NULL),(39,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,74,NULL,NULL),(40,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,75,NULL,NULL),(41,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,76,NULL,NULL),(42,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,77,NULL,NULL),(43,'2024-07-01','2024-09-15',2,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,78,NULL,NULL),(44,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,67,NULL,NULL),(45,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,68,NULL,NULL),(46,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,69,NULL,NULL),(47,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,70,NULL,NULL),(48,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,71,NULL,NULL),(49,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,72,NULL,NULL),(50,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,73,NULL,NULL),(51,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,74,NULL,NULL),(52,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,75,NULL,NULL),(53,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,76,NULL,NULL),(54,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,77,NULL,NULL),(55,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,2,78,NULL,NULL),(56,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of First Eel Lake','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,79,1,NULL),(57,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of the  bridge in French Village (closed before  May 1)','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,63,1,NULL),(58,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of the  Bloomfield Station bridge','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,64,1,NULL),(59,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of Route 105','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,65,1,NULL),(60,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of the  railway bridge (1.3 km upstream of  Route 2)','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,80,1,NULL),(61,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of the  Durham Bridge','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,66,1,NULL),(62,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of Route  595','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,81,1,NULL),(63,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of  Sunset Drive','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,82,1,NULL),(64,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of the Brittain  Road bridge','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,83,1,NULL),(65,'2024-04-15','2024-06-30',0,'30cm','60cm','including the North  Branch and South Branch Oromocto River  downstream of Route 101','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,84,1,NULL),(66,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,85,1,NULL),(67,'2024-04-15','2024-06-30',0,'30cm','60cm','from the covered bridge  in Hartland to the power line crossing  360 m downstream','2024-12-14 00:10:12','2024-12-14 00:10:12',1,3,6,1,1,86,1,NULL),(68,'2024-04-15','2024-06-30',0,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,87,1,NULL),(69,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of First Eel Lake','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,79,1,NULL),(70,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of the  bridge in French Village (closed before  May 1)','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,63,1,NULL),(71,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of the  Bloomfield Station bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,64,1,NULL),(72,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of Route 105','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,65,1,NULL),(73,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of the  railway bridge (1.3 km upstream of  Route 2)','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,80,1,NULL),(74,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of the  Durham Bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,66,1,NULL),(75,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of Route  595','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,81,1,NULL),(76,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of  Sunset Drive','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,82,1,NULL),(77,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of the Brittain  Road bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,83,1,NULL),(78,'2024-07-01','2024-09-15',2,'30cm','60cm','including the North  Branch and South Branch Oromocto River  downstream of Route 101','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,84,1,NULL),(79,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,85,1,NULL),(80,'2024-07-01','2024-09-15',2,'30cm','60cm','from the covered bridge  in Hartland to the power line crossing  360 m downstream','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,1,NULL),(81,'2024-07-01','2024-09-15',2,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,87,1,NULL),(82,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of First Eel Lake','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,79,1,NULL),(83,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of the  bridge in French Village (closed before  May 1)','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,63,1,NULL),(84,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of the  Bloomfield Station bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,64,1,NULL),(85,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of Route 105','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,65,1,NULL),(86,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of the  railway bridge (1.3 km upstream of  Route 2)','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,80,1,NULL),(87,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of the  Durham Bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,66,1,NULL),(88,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of Route  595','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,81,1,NULL),(89,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of  Sunset Drive','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,82,1,NULL),(90,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of the Brittain  Road bridge','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,83,1,NULL),(91,'2024-09-16','2024-10-15',0,'30cm','60cm','including the North  Branch and South Branch Oromocto River  downstream of Route 101','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,84,1,NULL),(92,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,85,1,NULL),(93,'2024-09-16','2024-10-15',0,'30cm','60cm','from the covered bridge  in Hartland to the power line crossing  360 m downstream','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,1,NULL),(94,'2024-09-16','2024-10-15',0,'30cm','60cm','downstream of Route 2','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,87,1,NULL),(95,'2024-04-15','2024-06-30',0,'30cm','60cm','and all tributaries  downstream of the Mactaquac Dam','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,2,NULL),(96,'2024-07-01','2024-09-15',2,'30cm','60cm','and all tributaries  downstream of the Mactaquac Dam','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,2,NULL),(97,'2024-09-16','2024-11-30',0,'30cm','60cm','and all tributaries  downstream of the Mactaquac Dam','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,2,NULL),(98,'2024-04-15','2024-06-30',0,'30cm','60cm','upstream of the railway  bridge (1.3 km upstream of Route 2) to the  North Branch Meduxnekeag River','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,80,NULL,NULL),(99,'2024-07-01','2024-09-15',2,'30cm','60cm','upstream of the railway  bridge (1.3 km upstream of Route 2) to the  North Branch Meduxnekeag River','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,80,NULL,NULL),(100,'2024-05-01','2024-06-30',0,'30cm','60cm','including Mactaquac Arm,  Longs Creek Arm and Kellys Creek Basin','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,88,NULL,NULL),(101,'2024-07-01','2024-09-15',2,'30cm','60cm','including Mactaquac Arm,  Longs Creek Arm and Kellys Creek Basin','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,88,NULL,NULL),(102,'2024-09-16','2024-11-30',0,'30cm','60cm','including Mactaquac Arm,  Longs Creek Arm and Kellys Creek Basin','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,88,NULL,NULL),(103,'2024-04-15','2024-06-30',0,'30cm','60cm','from the power lines  crossing the river 360 m below the covered  bridge in Hartland downstream to the Route  585 highway bridge in Grafton, excluding  tributaries','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,NULL,NULL),(104,'2024-07-01','2024-09-15',2,'30cm','60cm','from the power lines  crossing the river 360 m below the covered  bridge in Hartland downstream to the Route  585 highway bridge in Grafton, excluding  tributaries','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,NULL,NULL),(105,'2024-09-16','2024-11-30',0,'30cm','60cm','from the power lines  crossing the river 360 m below the covered  bridge in Hartland downstream to the Route  585 highway bridge in Grafton, excluding  tributaries','2024-12-14 00:10:13','2024-12-14 00:10:13',1,3,6,1,1,86,NULL,NULL),(106,'2024-01-01','2024-12-31',10,'10cm','100cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,7,1,NULL,NULL,1,NULL),(107,'2024-01-01','2024-12-30',10,'10cm','100cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,7,1,NULL,NULL,2,NULL),(108,'2024-01-01','2024-12-31',10,'10cm','100cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,8,1,NULL,NULL,1,NULL),(109,'2024-01-01','2024-12-30',10,'10cm','100cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,8,1,NULL,NULL,2,NULL),(110,'2024-01-01','2024-12-31',10,'35cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,9,1,NULL,NULL,1,NULL),(111,'2024-01-01','2024-12-31',10,'35cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,9,1,NULL,NULL,2,NULL),(112,'2024-01-01','2024-12-31',20,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,10,1,NULL,NULL,1,NULL),(113,'2024-01-01','2024-12-31',20,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,10,1,NULL,NULL,2,NULL),(114,'2024-01-01','2024-12-31',5,'10cm','170cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,17,1,NULL,NULL,1,NULL),(115,'2024-01-01','2024-12-30',5,'10cm','170cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,17,1,NULL,NULL,2,NULL),(116,'2024-04-01','2024-05-31',60,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,11,1,NULL,NULL,2,1),(117,'2024-08-01','2024-05-31',60,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,11,1,NULL,NULL,2,2),(118,'2024-01-01','2024-12-31',5,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,12,1,NULL,NULL,1,NULL),(119,'2024-01-01','2024-12-31',5,NULL,NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,12,1,NULL,NULL,2,NULL),(120,'2024-01-01','2024-12-29',1,'68cm','150cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,13,1,NULL,NULL,2,NULL),(121,'2024-01-01','2024-12-31',25,'10cm','50cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,15,1,NULL,NULL,1,NULL),(122,'2024-01-01','2024-12-30',25,'10cm','50cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,15,1,NULL,NULL,2,NULL),(123,'2024-01-01','2024-12-31',100,'10cm','50cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,16,1,NULL,NULL,1,NULL),(124,'2024-01-01','2024-12-30',100,'10cm','50cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',1,4,16,1,NULL,NULL,2,NULL),(125,'2024-04-15','2024-09-15',5,'10cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,1,1,1,NULL,NULL,NULL),(126,'2024-04-15','2024-09-30',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,1,2,1,NULL,NULL,NULL),(127,'2024-05-01','2024-09-15',5,'10cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,1,1,2,NULL,NULL,NULL),(128,'2024-04-15','2024-09-30',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,1,2,2,NULL,NULL,NULL),(129,'2024-04-15','2024-09-15',2,'15cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,2,1,1,NULL,NULL,NULL),(130,'2024-04-15','2024-09-30',2,'15cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,2,2,1,NULL,NULL,NULL),(131,'2024-05-01','2024-09-15',2,'15cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,2,1,2,NULL,NULL,NULL),(132,'2024-04-15','2024-09-30',2,'15cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,2,2,2,NULL,NULL,NULL),(133,'2024-04-15','2024-09-15',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,3,1,1,NULL,NULL,NULL),(134,'2024-04-15','2024-09-30',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,3,2,1,NULL,NULL,NULL),(135,'2024-05-01','2024-09-15',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,3,1,2,NULL,NULL,NULL),(136,'2024-04-15','2024-09-30',5,'15cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,3,2,2,NULL,NULL,NULL),(137,'2024-04-15','2024-09-15',2,'45cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,4,1,1,NULL,NULL,NULL),(138,'2024-04-15','2024-09-30',2,'45cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,4,2,1,NULL,NULL,NULL),(139,'2024-05-01','2024-09-15',2,'45cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,4,1,2,NULL,NULL,NULL),(140,'2024-04-15','2024-09-30',2,'45cm',NULL,'No more than 2 Lake Trout and/or Brown Trout','2024-12-14 00:10:13','2024-12-14 00:10:13',2,1,4,2,2,NULL,NULL,NULL),(141,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,1,NULL,NULL),(142,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,1,2,NULL,NULL),(143,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,3,NULL,NULL),(144,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,4,NULL,NULL),(145,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,5,NULL,NULL),(146,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,6,NULL,NULL),(147,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,7,NULL,NULL),(148,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,8,NULL,NULL),(149,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,9,NULL,NULL),(150,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,10,NULL,NULL),(151,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,11,NULL,NULL),(152,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,12,NULL,NULL),(153,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,13,NULL,NULL),(154,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,14,NULL,NULL),(155,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,15,NULL,NULL),(156,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,16,NULL,NULL),(157,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,17,NULL,NULL),(158,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,18,NULL,NULL),(159,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,19,NULL,NULL),(160,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,20,NULL,NULL),(161,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,21,NULL,NULL),(162,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,22,NULL,NULL),(163,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,23,NULL,NULL),(164,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,24,NULL,NULL),(165,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,25,NULL,NULL),(166,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,26,NULL,NULL),(167,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,27,NULL,NULL),(168,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,28,NULL,NULL),(169,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,29,NULL,NULL),(170,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,30,NULL,NULL),(171,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,31,NULL,NULL),(172,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,32,NULL,NULL),(173,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,33,NULL,NULL),(174,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,34,NULL,NULL),(175,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,35,NULL,NULL),(176,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,36,NULL,NULL),(177,'2024-05-01','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,1,2,37,NULL,NULL),(178,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,2,38,NULL,NULL),(179,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,1,39,NULL,NULL),(180,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,2,40,NULL,NULL),(181,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,2,41,NULL,NULL),(182,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,2,42,NULL,NULL),(183,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,1,43,NULL,NULL),(184,'2024-04-15','2024-09-30',2,'35cm','63cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,2,5,2,1,44,NULL,NULL),(185,'2024-04-15','2024-09-30',2,'25cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,1,NULL,NULL,NULL),(186,'2024-04-15','2024-09-30',2,'25cm',NULL,NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,NULL,NULL,NULL),(187,'2024-04-15','2024-09-15',5,'10cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,1,1,NULL,NULL,NULL),(188,'2024-05-01','2024-09-15',5,'10cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,1,2,NULL,NULL,NULL),(189,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,45,NULL,NULL),(190,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,46,NULL,NULL),(191,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,10,NULL,NULL),(192,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,47,NULL,NULL),(193,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,48,NULL,NULL),(194,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,49,NULL,NULL),(195,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,50,NULL,NULL),(196,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,15,NULL,NULL),(197,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,19,NULL,NULL),(198,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,21,NULL,NULL),(199,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,51,NULL,NULL),(200,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,52,NULL,NULL),(201,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,53,NULL,NULL),(202,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,54,NULL,NULL),(203,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,55,NULL,NULL),(204,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,56,NULL,NULL),(205,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,30,NULL,NULL),(206,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,34,NULL,NULL),(207,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,35,NULL,NULL),(208,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,57,NULL,NULL),(209,'2024-09-16','2024-10-15',0,'30cm','60cm',NULL,'2024-12-14 00:10:13','2024-12-14 00:10:13',2,3,6,2,2,37,NULL,NULL),(212,'2024-01-01','2024-12-31',10,'10cm','100cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,8,NULL,NULL,NULL,1,NULL),(211,'2024-01-01','2024-12-30',10,'10cm','100cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,7,NULL,NULL,NULL,2,NULL),(210,'2024-01-01','2024-12-31',10,'10cm','100cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,7,NULL,NULL,NULL,1,NULL),(213,'2024-01-01','2024-12-30',10,'10cm','100cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,8,NULL,NULL,NULL,2,NULL),(214,'2024-01-01','2024-12-31',10,'35cm',NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,9,NULL,NULL,NULL,1,NULL),(215,'2024-01-01','2024-12-31',10,'35cm',NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,9,NULL,NULL,NULL,2,NULL),(216,'2024-01-01','2024-12-31',20,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,10,NULL,NULL,NULL,1,NULL),(217,'2024-01-01','2024-12-31',20,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,10,NULL,NULL,NULL,2,NULL),(218,'2024-04-01','2024-05-31',60,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,11,1,NULL,NULL,2,1),(219,'2024-08-01','2024-05-31',60,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,11,1,NULL,NULL,2,2),(220,'2024-01-01','2024-12-31',60,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,11,2,NULL,NULL,1,NULL),(221,'2024-01-01','2024-12-31',60,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,11,2,NULL,NULL,2,NULL),(222,'2024-01-01','2024-12-31',5,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,12,NULL,NULL,NULL,1,NULL),(223,'2024-01-01','2024-12-31',5,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,12,NULL,NULL,NULL,2,NULL),(224,'2024-01-01','2024-12-31',1,'68cm','150cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,13,NULL,NULL,NULL,1,NULL),(225,'2024-01-01','2024-12-29',1,'68cm','150cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,13,NULL,NULL,NULL,2,NULL),(226,'2024-01-01','2024-12-31',3,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,14,2,NULL,NULL,1,NULL),(227,'2024-01-01','2024-12-31',3,NULL,NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,14,2,NULL,NULL,2,NULL),(228,'2024-01-01','2024-12-31',25,'10cm','50cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,15,1,NULL,NULL,1,NULL),(229,'2024-01-01','2024-12-30',25,'10cm','50cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,15,1,NULL,NULL,2,NULL),(230,'2024-01-01','2024-12-31',25,'10cm',NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,15,2,NULL,NULL,1,NULL),(231,'2024-01-01','2024-12-31',25,'10cm',NULL,NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,15,2,NULL,NULL,2,NULL),(232,'2024-01-01','2024-12-31',100,'10cm','50cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,16,NULL,NULL,NULL,1,NULL),(233,'2024-01-01','2024-12-30',100,'10cm','50cm',NULL,'2024-12-14 00:10:14','2024-12-14 00:10:14',2,4,16,NULL,NULL,NULL,2,NULL);
/*!40000 ALTER TABLE `fish_limits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fishing_methods`
--

DROP TABLE IF EXISTS `fishing_methods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fishing_methods` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fishing_methods`
--

LOCK TABLES `fishing_methods` WRITE;
/*!40000 ALTER TABLE `fishing_methods` DISABLE KEYS */;
INSERT INTO `fishing_methods` VALUES (1,'Dip Net','2024-12-13 06:07:54','2024-12-13 06:07:54'),(2,'Angling','2024-12-13 06:07:54','2024-12-13 06:07:54');
/*!40000 ALTER TABLE `fishing_methods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint unsigned NOT NULL,
  `reserved_at` int unsigned DEFAULT NULL,
  `available_at` int unsigned NOT NULL,
  `created_at` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (1,'Lower Saint John',NULL,'2024-12-06 22:35:15','2024-12-06 22:35:15'),(2,'Southwest',NULL,'2024-12-13 05:54:53','2024-12-13 05:54:53');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_10_22_155259_create_locations_table',1),(5,'2024_10_22_155354_create_fish_categories_table',1),(6,'2024_10_22_155406_create_fish_table',1),(7,'2024_10_22_155434_create_boundaries_table',1),(8,'2024_10_22_155449_create_waters_categories_table',1),(9,'2024_10_22_155500_create_waters_table',1),(10,'2024_10_22_180507_create_fish_limits_table',1),(11,'2024_11_17_181310_create_tidal_categories_table',1),(12,'2024_11_17_190234_create_fishing_methods_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('nXhWmrLbrfo7M092kw6OVgQRZHISZ1SUQnxxl4HD',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiQmN0M0JMTGd6T0FETFltRFJSY0tVYlN5WTBVY3JBMVRnU0N3SkdXdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wZGYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1734060542),('UiDeQan4EVvAvRIWT6DLMhHlluOXlglHjYG86nqc',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiRTh6ZDBjMGkwTnh6SVJVRWZISjJWY044RmxPck5raFkzRVVrdEJ6YiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wZGYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1734120614),('P5zPSsewpxFzglA7M2e2t4cMiQcrm3gErd1Ol6W4',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0','YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2w1b3ZKZ3JDaDZPQ1BDZDFON0tCcTdmQ3pEZjN0RkdRUjd3SFdvciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wZGYiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1734055674);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tidal_categories`
--

DROP TABLE IF EXISTS `tidal_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tidal_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tidal_categories`
--

LOCK TABLES `tidal_categories` WRITE;
/*!40000 ALTER TABLE `tidal_categories` DISABLE KEYS */;
INSERT INTO `tidal_categories` VALUES (1,'Non-Tidal','2024-12-13 06:07:54','2024-12-13 06:07:54'),(2,'Tidal','2024-12-13 06:07:54','2024-12-13 06:07:54');
/*!40000 ALTER TABLE `tidal_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matthew MacPherson','matthewallanmacpherson@gmail.com',NULL,'$2y$12$yQ92xBS/RRFl/ZyVO/Jniepr4YsfmFHF3ez5h.CiBZbnuN.7JhZ3e',NULL,'2024-12-13 06:12:21','2024-12-13 06:12:21');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waters`
--

DROP TABLE IF EXISTS `waters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `waters` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waters`
--

LOCK TABLES `waters` WRITE;
/*!40000 ALTER TABLE `waters` DISABLE KEYS */;
INSERT INTO `waters` VALUES (1,'Lake Anthony Brook','2024-12-13 06:07:53','2024-12-13 06:07:53'),(2,'Palfrey Stream','2024-12-13 06:07:53','2024-12-13 06:07:53'),(3,'Lake Anthony','2024-12-13 06:07:53','2024-12-13 06:07:53'),(4,'Big Indian Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(5,'Chamcook Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(6,'Clear Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(7,'Cranberry Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(8,'Crystal Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(9,'Deer Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(10,'Digdeguash Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(11,'Eagle Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(12,'East Branch Reservoir','2024-12-13 06:07:53','2024-12-13 06:07:53'),(13,'East Long Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(14,'Gibson Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(15,'Harvey Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(16,'La Coote Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(17,'Little Chamcook Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(18,'Little John Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(19,'Little Magaguadavic  Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(20,'Loch Alva Reservoir','2024-12-13 06:07:53','2024-12-13 06:07:53'),(21,'Magaguadavic Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(22,'Moose Lake   (Musquash  drainage)','2024-12-13 06:07:53','2024-12-13 06:07:53'),(23,'Ogden Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(24,'Queens Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(25,'Robin Hood Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(26,'Rocky Lake   (Lepreau drainage)','2024-12-13 06:07:53','2024-12-13 06:07:53'),(27,'Round Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(28,'Shadow Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(29,'Sherwood Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(30,'Skiff Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(31,'Sparks Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(32,'Spectacle Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(33,'St. Patricks Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(34,'Trout Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(35,'Lake Utopia','2024-12-13 06:07:53','2024-12-13 06:07:53'),(36,'West Long Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(37,'Wheaton Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(38,'East Grand Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(39,'Grand Falls Flowage','2024-12-13 06:07:53','2024-12-13 06:07:53'),(40,'North Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(41,'Palfrey Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(42,'Spednic Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(43,'St. Croix River','2024-12-13 06:07:53','2024-12-13 06:07:53'),(44,'Woodland Flowage','2024-12-13 06:07:53','2024-12-13 06:07:53'),(45,'Bolton Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(46,'Craig Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(47,'East Branch  Reservoir','2024-12-13 06:07:53','2024-12-13 06:07:53'),(48,'East Brook Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(49,'First Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(50,'Foster Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(51,'McDougall Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(52,'Mill Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(53,'Modsley Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(54,'Moores Mills  Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(55,'Potters Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(56,'Second Harvey  Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(57,'Wauklahegan  Lake','2024-12-13 06:07:53','2024-12-13 06:07:53'),(58,'Newcastle Creek','2024-12-14 00:10:12','2024-12-14 00:10:12'),(59,'Grand Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(60,'Oromocto Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(61,'Second Eel Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(62,'Yoho Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(63,'Hammond River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(64,'Kennebecasis River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(65,'Keswick River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(66,'Nashwaak River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(67,'• Brown Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(68,'• Cassidy Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(69,'• Darlings Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(70,'• Davidson Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(71,'• First Eel Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(72,'• Lake George','2024-12-14 00:10:12','2024-12-14 00:10:12'),(73,'• Ludgate Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(74,'• Oromocto Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(75,'• Second Eel Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(76,'• Waltons Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(77,'• Yoho Lake','2024-12-14 00:10:12','2024-12-14 00:10:12'),(78,'','2024-12-14 00:10:12','2024-12-14 00:10:12'),(79,'Eel River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(80,'Meduxnekeag River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(81,'Nackawic Stream','2024-12-14 00:10:12','2024-12-14 00:10:12'),(82,'Nashwaaksis Stream','2024-12-14 00:10:12','2024-12-14 00:10:12'),(83,'Nerepis River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(84,'Oromocto River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(85,'Pokiok Stream','2024-12-14 00:10:12','2024-12-14 00:10:12'),(86,'Saint John River','2024-12-14 00:10:12','2024-12-14 00:10:12'),(87,'Shogomoc Stream','2024-12-14 00:10:12','2024-12-14 00:10:12'),(88,'Mactaquac Lake','2024-12-14 00:10:13','2024-12-14 00:10:13');
/*!40000 ALTER TABLE `waters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `waters_categories`
--

DROP TABLE IF EXISTS `waters_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `waters_categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `waters_categories`
--

LOCK TABLES `waters_categories` WRITE;
/*!40000 ALTER TABLE `waters_categories` DISABLE KEYS */;
INSERT INTO `waters_categories` VALUES (1,'Rivers, brooks and streams','2024-12-13 06:07:52','2024-12-13 06:07:52'),(2,'Lakes, ponds and reservoirs','2024-12-13 06:07:52','2024-12-13 06:07:52');
/*!40000 ALTER TABLE `waters_categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-13 16:10:47
