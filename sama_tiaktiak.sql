-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 08 mai 2024 à 15:53
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `sama_tiaktiak`
--

-- --------------------------------------------------------

--
-- Structure de la table `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `origine` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `destination` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heure` time NOT NULL,
  `etat` int(11) NOT NULL DEFAULT 0,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `courses`
--

INSERT INTO `courses` (`id`, `origine`, `destination`, `heure`, `etat`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 'Rufisque', 'Pikine', '14:28:00', 0, 2, '2024-05-07 01:01:41', '2024-05-07 01:01:41'),
(3, 'Colobane', 'Thiaroye', '15:00:00', 1, 2, '2024-05-08 00:10:25', '2024-05-08 00:10:25'),
(4, 'Pikine', 'Rufisque', '17:00:00', 0, 1, '2024-05-08 12:21:55', '2024-05-08 12:25:43'),
(5, 'Pikine', 'Diamagueune', '12:00:00', 0, 1, '2024-05-08 12:37:52', '2024-05-08 12:37:52');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_11_06_224221_create_posts_table', 1),
(6, '2023_11_07_152532_add_user_id_to_posts_table', 1),
(7, '2024_05_04_132417_create_courses_table', 1),
(8, '2024_05_04_135633_create_offres_table', 1),
(9, '2024_05_04_150121_create_motos_table', 1);

-- --------------------------------------------------------

--
-- Structure de la table `motos`
--

CREATE TABLE `motos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `immatriculation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `marque` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `taximan_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `motos`
--

INSERT INTO `motos` (`id`, `immatriculation`, `marque`, `date`, `taximan_id`, `created_at`, `updated_at`) VALUES
(2, 'G6F5TR', 'Toyota', '2024-05-22', 3, '2024-05-07 23:14:12', '2024-05-07 23:14:12'),
(3, 'T6D6DS', 'Peugeot', '2024-03-15', 3, '2024-05-08 00:42:59', '2024-05-08 00:50:45'),
(4, 'H86GGF', 'BMVW', '2024-05-02', 3, '2024-05-08 01:26:08', '2024-05-08 01:26:08');

-- --------------------------------------------------------

--
-- Structure de la table `offres`
--

CREATE TABLE `offres` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prix` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `destination` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etat` int(11) NOT NULL DEFAULT 0,
  `taximan_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `offres`
--

INSERT INTO `offres` (`id`, `prix`, `destination`, `etat`, `taximan_id`, `created_at`, `updated_at`) VALUES
(2, '8000', 'Thiaroye', 1, 3, '2024-05-08 00:28:14', '2024-05-08 12:01:13'),
(3, '6000', 'Mbadiene', 0, 3, '2024-05-08 00:38:28', '2024-05-08 00:38:28'),
(4, '3500', 'Grang Yoff', 0, 3, '2024-05-08 12:45:25', '2024-05-08 12:45:25');

-- --------------------------------------------------------

--
-- Structure de la table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '7b3ec3c076537462eca1cab34a468ed8c98e8bfbf3633e52b55db78419d1ac7e', '[\"*\"]', NULL, NULL, '2024-05-08 01:16:47', '2024-05-08 01:16:47'),
(2, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '5950c45c8af01d7736ba5485a026973b0923bbc5152d40c10d40b08a15a4964c', '[\"*\"]', '2024-05-08 01:26:08', NULL, '2024-05-08 01:17:14', '2024-05-08 01:26:08'),
(3, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '1a8cc550b0c7124bee834bf0683f4ce1f89573bb3dda680d9aa906880342f937', '[\"*\"]', '2024-05-08 02:29:07', NULL, '2024-05-08 02:26:32', '2024-05-08 02:29:07'),
(4, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '05a3451e89f7743e55f3a068d9fb521e1f826e62c7fc2196e2796e7d10dcc3d3', '[\"*\"]', '2024-05-08 02:34:49', NULL, '2024-05-08 02:33:44', '2024-05-08 02:34:49'),
(5, 'App\\Models\\User', 3, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '8d2c16674f4d84575d0625b242f7f5de57b001b57196488704c4a115d80d59cd', '[\"*\"]', '2024-05-08 02:39:29', NULL, '2024-05-08 02:37:36', '2024-05-08 02:39:29'),
(6, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '50f3b6b82572e906a36ab362ed64e9a296dc92d2a3849c2eb335ae01caa1e683', '[\"*\"]', '2024-05-08 02:51:13', NULL, '2024-05-08 02:49:59', '2024-05-08 02:51:13'),
(7, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', 'f18e887b1bd769b61261301f8ea899ace73040685efb9657fd6b93c6af583adb', '[\"*\"]', '2024-05-08 03:17:14', NULL, '2024-05-08 03:15:57', '2024-05-08 03:17:14'),
(8, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '4c29e35957a254c6cebfc12b1ae8505c9882265309af275496d214fca6999058', '[\"*\"]', '2024-05-08 12:01:12', NULL, '2024-05-08 11:59:49', '2024-05-08 12:01:12'),
(9, 'App\\Models\\User', 3, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '528d83c43e1e66919aba33af41d55033c34039f1f5b5fc39fb51964003c521be', '[\"*\"]', '2024-05-08 12:13:05', NULL, '2024-05-08 12:09:30', '2024-05-08 12:13:05'),
(10, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '7ae7f12c668f5bcf1858beedbd9cb953a5934ef1b7288572695d87d3a98d4abd', '[\"*\"]', '2024-05-08 12:37:52', NULL, '2024-05-08 12:19:20', '2024-05-08 12:37:52'),
(11, 'App\\Models\\User', 3, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '138dc1e397fa77d64b1744511e8fc908a4cdaad89f4258ff3447866382c31087', '[\"*\"]', '2024-05-08 12:45:25', NULL, '2024-05-08 12:43:38', '2024-05-08 12:45:25'),
(12, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '335d27e8ed2bd657e6ee2a168391262f76b954c1c179fe2fd38d11ecb1566592', '[\"*\"]', '2024-05-08 13:19:41', NULL, '2024-05-08 13:17:14', '2024-05-08 13:19:41'),
(13, 'App\\Models\\User', 1, 'MA_CLE_SECRETE_VISIBLE_UNIQUEMENT_AU_BACKEND', '4730744a6aeb169df907699a90a662824f14e35fc76a5a8824383eeafdbd1f29', '[\"*\"]', '2024-05-08 13:50:17', NULL, '2024-05-08 13:49:22', '2024-05-08 13:50:17');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `prenom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexe` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `prenom`, `nom`, `sexe`, `age`, `adresse`, `telephone`, `email`, `email_verified_at`, `password`, `profile`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Wally', 'Thioye', 'Masculin', '22', 'Guenene', '774082075', 'wallythioye56@gmail.com', NULL, '$2y$12$aPokJTy1TKW2OdvHMW1EveGWN07whRSDiPL35zr634YENHtEtScdu', 'client', NULL, '2024-05-07 00:08:01', '2024-05-07 00:08:01'),
(2, 'Babacar', 'Diop', 'Masculin', '24', 'Thies', '783376960', 'baba@gmail.com', NULL, '$2y$12$8SsIkqkdE7TbbeVQpSaza.yZWNbBxUonWpmCFDPZebS5A/As/0AWO', 'client', NULL, '2024-05-07 00:24:33', '2024-05-07 00:24:33'),
(3, 'Ibou', 'Seck', '10:20:00', '40', 'rifisque', '785468865', 'ibou@gmail.com', NULL, '$2y$12$WVEYK2gJfjuICdxY6/PJaORr7Fa9rTOoCmt3IFGe1G7LHCPTRXpfO', 'taximan', NULL, '2024-05-07 01:55:07', '2024-05-07 01:55:07');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courses_client_id_foreign` (`client_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `motos`
--
ALTER TABLE `motos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `motos_taximan_id_foreign` (`taximan_id`);

--
-- Index pour la table `offres`
--
ALTER TABLE `offres`
  ADD PRIMARY KEY (`id`),
  ADD KEY `offres_taximan_id_foreign` (`taximan_id`);

--
-- Index pour la table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `motos`
--
ALTER TABLE `motos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `offres`
--
ALTER TABLE `offres`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_client_id_foreign` FOREIGN KEY (`client_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `motos`
--
ALTER TABLE `motos`
  ADD CONSTRAINT `motos_taximan_id_foreign` FOREIGN KEY (`taximan_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `offres`
--
ALTER TABLE `offres`
  ADD CONSTRAINT `offres_taximan_id_foreign` FOREIGN KEY (`taximan_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
