<?php

header("Access-Control-Allow-Origin: *");

$host = 'localhost';
$port = '3307'; 
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password );

$country = isset($_GET['country']) ? $_GET['country'] : '';
$lookup = isset($_GET['lookup']) ? $_GET['lookup'] : '';


if ($lookup === "lookup-city") {
  $stmt = $conn->query("SELECT c.id, c.name AS city , c.district , c.country_code, cs.name, c.population FROM cities c JOIN countries cs ON c.country_code = cs.code WHERE cs.name LIKE '%$country%'  ");
}

else {
  $stmt = $conn->query("SELECT name, continent, independence_year , head_of_state FROM countries WHERE name LIKE '%$country%'  ");
}

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

/*foreach ($results as $result) {
  echo "Name: " . $result['name'] . ", Continent: " . $result['continent'] . ", Independence Year: " . $result['independence_year'] . "<br>";
}*/

/*foreach ($results as $key => $value) {
    echo "Key: $key, Value: $value<br>";
}*/



?>



<?php


// echo $lookup ; 

// $dataType = gettype($results);
// echo "The data type is: $dataType";
// echo $results;
// print_r($results);


// foreach ($results as $key => $value) {
//     echo "Key: $key, Value: $value\n";
// }




if ($lookup === "lookup-city"): ?>


<table border="1">
        <thead>
            <tr>
                <th> Name</th>
                <th>District</th>
                <th>Population</th>
            </tr>
        </thead>
        <tbody>

        <?php foreach ($results as $row): ?>
            <tr>
                <td><?= $row['name']?></td>
                <td><?= $row['district']?></td>
                <td><?= $row['population']?></td>
            </tr>
        <?php endforeach; ?>



            
        </tbody>
    </table>





<?php else: ?>


    <table border="1">
        <thead>
            <tr>
                <th> Country Name</th>
                <th>Continent</th>
                <th>Independence Year</th>
                <th>Head of State</th>
            </tr>
        </thead>
        <tbody>

        <?php foreach ($results as $row): ?>
            <tr>
                <td><?= $row['name']?></td>
                <td><?= $row['continent']?></td>
                <td><?= $row['independence_year']?></td>
                <td><?= $row['head_of_state']?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>


            
  <?php endif; ?>


