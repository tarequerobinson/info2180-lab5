<?php

header("Access-Control-Allow-Origin: *");

$host = 'localhost';
$port = '3307'; 
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password );

$country = isset($_GET['country']) ? $_GET['country'] : '';
$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%' ");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
