-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2024 at 07:31 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vue_laravel_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'john.doe@example.com', NULL, '$2y$12$JrAZBMyNrJJgPG5ccetIDuRUbhnh57HYSk9EX2OCqUbK6CkM6Sthu', 4, NULL, '2024-09-17 23:46:26', '2024-09-17 23:46:26'),
(2, 'Saurabh Shukla', 'saurabh.shukla@example.com', NULL, '$2y$12$dk9nn7nnUQRAl6qL9zftnO0bLKmxxjn2JQvfCkeev3wiQ03iUqZOW', 3, NULL, '2024-09-17 23:47:04', '2024-09-17 23:47:04'),
(3, 'Rishabh Shukla', 'rishabh.shukla@example.com', NULL, '$2y$12$uyBCpPvgApvLfiZgxZoPt.2Fia0TOR.sLy7ddtAgurOaEXs1PuJYa', 2, NULL, '2024-09-17 23:47:42', '2024-09-17 23:47:42'),
(4, 'Om Nath', 'om.nath@example.com', NULL, '$2y$12$3iLQmUvvZkz0kKmpEzAI5eeBC5cDHF/NsOhWZY9wT0OBKEP4xAsry', 1, NULL, '2024-09-17 23:48:18', '2024-09-17 23:48:18'),
(5, 'Vijay Mohan', 'vijay.mohan@example.com', NULL, '$2y$12$RotqBT07NKF1wZ6BBvWSDuaxZI9Yi20MiT18xeHOuv0biDKFsSBVm', 4, NULL, '2024-09-18 04:08:10', '2024-09-18 04:08:10'),
(6, 'Shree Nath', 'shree.nath@example.com', NULL, '$2y$12$pKZxLMctuGHfnrV65ZZ/1uKPhGVmw5q0HNXFQWbNFJFYHoxjDTVmW', 4, NULL, '2024-09-18 04:15:07', '2024-09-18 04:15:07'),
(8, 'Neem Raj', 'neem.raj@example.com', NULL, '$2y$12$LcNE6ozDf36cdDT8QwAyauVeWZNMhcbYSViy8foui5MwcMWLzzyWu', 4, NULL, '2024-09-18 08:06:46', '2024-09-18 08:06:46'),
(9, 'Om Prakash Namo', 'om.prakash@example.com', NULL, '$2y$12$0gY2j6LKSnPeHy1KJSN3suJrzLhTNbsN0n.z8up.AovRAca6dTZtu', 4, NULL, '2024-09-18 08:07:31', '2024-09-18 20:17:50'),
(11, 'John Paul', 'john.paul@example.com', NULL, '$2y$12$X.1tJFxapGUUXG.Nef76cu8p.0vyAHRJXYoOKj7Kl96p/9ffIBHry', 4, NULL, '2024-09-18 20:18:36', '2024-09-18 20:18:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
