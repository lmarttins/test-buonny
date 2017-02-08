<?php

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {

    $grandparents = [
        ['id' => 1, 'nome' => "Anselmo"],
        ['id' => 2, 'nome' => "Joao"],
        ['id' => 3, 'nome' => "Antonio"]
    ];

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    echo json_encode($grandparents);
}