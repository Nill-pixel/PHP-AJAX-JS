<?php

header('Content-type: application/json');

$pdo = new PDO('mysql:dbname=test;host:localhost','root', '');

$stm = $pdo->query("SELECT * FROM test");

echo json_encode($stm->fetchAll(PDO::FETCH_ASSOC));