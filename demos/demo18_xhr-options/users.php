<?php

$users = array();

$users[] = array(
    "id"=>1,
    "name"=>"Maria Kindrai",
    "email"=>"mkindrai@email.com"
);

$users[] = array(
    "id"=>2,
    "name"=>"Kendra Kindrai",
    "email"=>"kkindrai@email.com"
);

$users[] = array(
    "id"=>3,
    "name"=>"Clara Kindrai",
    "email"=>"ckindrai@email.com"
);

$users[] = array(
    "id"=>4,
    "name"=>"Nick Kindrai",
    "email"=>"nkindrai@email.com"
);

$users[] = array(
    "id"=>5,
    "name"=>"Catherine Kindrai",
    "email"=>"ckindrai2@email.com"
);

echo json_encode($users);