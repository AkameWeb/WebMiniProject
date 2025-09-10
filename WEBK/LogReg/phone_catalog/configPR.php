<?php
$host = 'localhost';       // Хост базы данных
$dbname = 'equipment_catalog'; // Имя базы данных
$username = 'root';        // Имя пользователя базы данных
$password = '';            // Пароль базы данных

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к базе данных: " . $e->getMessage());
}
?>