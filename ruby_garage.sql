-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Лис 16 2020 р., 23:43
-- Версія сервера: 5.7.26
-- Версія PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `ruby_garage`
--

-- --------------------------------------------------------

--
-- Структура таблиці `projects`
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `projects`
--

INSERT INTO `projects` (`id`, `name`, `user_id`) VALUES
(18, 'progect 2', 10),
(15, '3547ghv', 13),
(7, 'ytyhhhf', 7),
(20, 'progect 32', 10);

-- --------------------------------------------------------

--
-- Структура таблиці `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `status`, `project_id`) VALUES
(1, 'tasks', 1, 1),
(2, 'hello', 1, 1),
(6, 'eeeee8888', 0, 18),
(9, 'tttttt', 0, 18),
(10, 'eeeee33334444', 0, 18);

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `login`, `password`) VALUES
(9, 'vyacheslav2', 'c4ca4238a0b923820dcc509a6f75849b'),
(8, 'vyacheslav1', 'c4ca4238a0b923820dcc509a6f75849b'),
(7, 'vyacheslav', '827ccb0eea8a706c4c34a16891f84e7b'),
(10, '1', 'c4ca4238a0b923820dcc509a6f75849b'),
(11, 'vy', 'c4ca4238a0b923820dcc509a6f75849b'),
(12, 'gggg', '08a4415e9d594ff960030b921d42b91e'),
(13, 'vyacheslav1@ukr.net', 'bcbe3365e6ac95ea2c0343a2395834dd');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
