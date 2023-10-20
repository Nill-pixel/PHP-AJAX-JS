<?php

header('Content-type: application/json');

$pdo = new PDO('mysql:dbname=test;host:localhost', 'root', '');

$stm = $pdo->prepare("INSERT INTO test (id, name, email) VALUES (uuid(), ?, ?)");
$stm->execute([$_POST['name'], $_POST['email']]);

echo json_encode(["msg" => "Created"]);