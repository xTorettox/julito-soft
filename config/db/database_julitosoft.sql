-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-06-2022 a las 14:42:45
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_julitosoft`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `budgets`
--

CREATE TABLE `budgets` (
  `id` int(11) NOT NULL,
  `budget_date` date NOT NULL,
  `budget_expiration` date NOT NULL,
  `work_order` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customercontacts`
--

CREATE TABLE `customercontacts` (
  `id` int(11) NOT NULL,
  `customer_contact_name` varchar(255) DEFAULT NULL,
  `customer_contact_lastname` varchar(255) DEFAULT NULL,
  `customer_contact_mail` varchar(255) DEFAULT NULL,
  `customer_contact_phone` int(11) DEFAULT NULL,
  `customer_contact_area` varchar(255) DEFAULT NULL,
  `customer_contact_rol` varchar(255) DEFAULT NULL,
  `customer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_cuit` varchar(30) DEFAULT NULL,
  `customer_phone` varchar(30) DEFAULT NULL,
  `customer_mail` varchar(255) DEFAULT NULL,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_picture` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`id`, `customer_name`, `customer_cuit`, `customer_phone`, `customer_mail`, `customer_address`, `customer_picture`, `createdAt`, `updatedAt`) VALUES
(1, 'Pampa Energía S.A.', '30526552659', '+54 (11) 4344-6000', 'contacto@pampaenergia.com', 'Maipú 1', 'https://www.pampaenergia.com/wp-content/uploads/2019/09/logo-pampa-energia.png', '2022-05-29 20:42:57', '2022-05-29 20:43:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fleets`
--

CREATE TABLE `fleets` (
  `id` int(11) NOT NULL,
  `fleet_name` varchar(255) DEFAULT NULL,
  `customer` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fleets`
--

INSERT INTO `fleets` (`id`, `fleet_name`, `customer`, `createdAt`, `updatedAt`) VALUES
(1, 'Flota Área Sierra Chata', 1, '2022-05-30 01:44:24', '2022-05-30 01:44:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job_description` varchar(255) NOT NULL,
  `job_duration_hs` float NOT NULL,
  `job_price` float NOT NULL,
  `work_order` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maintenance_parameters`
--

CREATE TABLE `maintenance_parameters` (
  `id` int(11) NOT NULL,
  `manteinance_name` varchar(255) NOT NULL,
  `frequency_km` int(11) NOT NULL,
  `frequency_years` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220522024434-create-customer.cjs'),
('20220522030355-create-customer-contact.cjs'),
('20220522030834-create-fleet.cjs'),
('20220522035016-create-vehicle.cjs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `service_items`
--

CREATE TABLE `service_items` (
  `id` int(11) NOT NULL,
  `service_item_description` varchar(255) NOT NULL,
  `service_item_solution` varchar(255) NOT NULL,
  `service_item_approved` tinyint(1) NOT NULL,
  `service_item_solved` tinyint(1) NOT NULL,
  `work_order` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spare_parts`
--

CREATE TABLE `spare_parts` (
  `id` int(11) NOT NULL,
  `part_description` varchar(255) NOT NULL,
  `part_number` varchar(30) NOT NULL,
  `part_location` varchar(30) NOT NULL,
  `part_price` float NOT NULL,
  `part_stock` int(11) NOT NULL,
  `work_order` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `domain` varchar(15) NOT NULL,
  `vin_number` varchar(30) NOT NULL,
  `motor_number` varchar(30) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `model` varchar(50) NOT NULL,
  `year` int(10) NOT NULL,
  `kilometers` int(10) NOT NULL,
  `fleet` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehicles`
--

INSERT INTO `vehicles` (`id`, `domain`, `vin_number`, `motor_number`, `brand`, `model`, `year`, `kilometers`, `fleet`, `created_at`, `updated_at`) VALUES
(1, 'AE579BG', '3C3CFFCR7CT272159', 'R5T6FFCR7CT272003', 'Toyota', 'Hilux', 2021, 35778, 1, '2022-05-30 01:52:58', '2022-05-30 01:52:58'),
(2, 'AE579TT', '1JCMR7841JT185472', 'R5T6FTGH7CT272003', 'Toyota', 'Hilux', 2021, 42979, 1, '2022-05-30 01:55:58', '2022-05-30 01:55:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `work_orders`
--

CREATE TABLE `work_orders` (
  `id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `order_km` int(11) NOT NULL,
  `fuel_level` varchar(30) NOT NULL,
  `pre_order_comments` varchar(255) NOT NULL,
  `post_order_comments` varchar(255) NOT NULL,
  `next_service_recommendations` varchar(255) NOT NULL,
  `order_amount` float NOT NULL,
  `order_open` tinyint(1) NOT NULL,
  `next_visit` varchar(255) NOT NULL,
  `vehicle` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `budgets`
--
ALTER TABLE `budgets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `work_order` (`work_order`);

--
-- Indices de la tabla `customercontacts`
--
ALTER TABLE `customercontacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer` (`customer`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fleets`
--
ALTER TABLE `fleets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer` (`customer`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `work_order` (`work_order`);

--
-- Indices de la tabla `maintenance_parameters`
--
ALTER TABLE `maintenance_parameters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `service_items`
--
ALTER TABLE `service_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `work_order` (`work_order`);

--
-- Indices de la tabla `spare_parts`
--
ALTER TABLE `spare_parts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `work_order` (`work_order`);

--
-- Indices de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fleet` (`fleet`);

--
-- Indices de la tabla `work_orders`
--
ALTER TABLE `work_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle` (`vehicle`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `budgets`
--
ALTER TABLE `budgets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `customercontacts`
--
ALTER TABLE `customercontacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `fleets`
--
ALTER TABLE `fleets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `maintenance_parameters`
--
ALTER TABLE `maintenance_parameters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `service_items`
--
ALTER TABLE `service_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `spare_parts`
--
ALTER TABLE `spare_parts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `work_orders`
--
ALTER TABLE `work_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `budgets`
--
ALTER TABLE `budgets`
  ADD CONSTRAINT `budgets_ibfk_1` FOREIGN KEY (`work_order`) REFERENCES `work_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `customercontacts`
--
ALTER TABLE `customercontacts`
  ADD CONSTRAINT `customercontacts_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `fleets`
--
ALTER TABLE `fleets`
  ADD CONSTRAINT `fleets_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`work_order`) REFERENCES `work_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `service_items`
--
ALTER TABLE `service_items`
  ADD CONSTRAINT `service_items_ibfk_1` FOREIGN KEY (`work_order`) REFERENCES `work_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `spare_parts`
--
ALTER TABLE `spare_parts`
  ADD CONSTRAINT `spare_parts_ibfk_1` FOREIGN KEY (`work_order`) REFERENCES `work_orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`fleet`) REFERENCES `fleets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `work_orders`
--
ALTER TABLE `work_orders`
  ADD CONSTRAINT `work_orders_ibfk_1` FOREIGN KEY (`vehicle`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
