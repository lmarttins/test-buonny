<?php

if (isset($_GET)) {

    $data = [
        'grandparents' => [
            ['id' => 1, 'nome' => "Anselmo"],
            ['id' => 2, 'nome' => "Joao"],
            ['id' => 3, 'nome' => "Antonio"]
        ],
        'parents' => [
            ['id' => 7, 'nome' => "Flavio", 'avo_id' => 2],
            ['id' => 2, 'nome' => "George", 'avo_id' => 1],
            ['id' => 3, 'nome' => "Marcio", 'avo_id' => 1],
            ['id' => 1, 'nome' => "Marcos", 'avo_id' => 1],
            ['id' => 4, 'nome' => "Maria", 'avo_id' => 2],
            ['id' => 6, 'nome' => "Joao", 'avo_id' => 2],
            ['id' => 5, 'nome' => "Jose", 'avo_id' => 2],
            ['id' => 8, 'nome' => "Julia", 'avo_id' => 3],
        ],
        'children' => [
            ['id' => 10, 'nome' => "Flavia"],
            ['id' => 5, 'nome' => "Georgia"],
            ['id' => 3, 'nome' => "Marcia"],
            ['id' => 14, 'nome' => "Marta"],
            ['id' => 13, 'nome' => "Mario"],
            ['id' => 15, 'nome' => "Joana"],
            ['id' => 9, 'nome' => "Jose"],
            ['id' => 7, 'nome' => "Julia"],
        ]
    ];

    header('Content-Type: application/json; charset=utf-8');
    header('access-control-allow-origin: *');

    echo json_encode($data[$_GET['params']]);
}