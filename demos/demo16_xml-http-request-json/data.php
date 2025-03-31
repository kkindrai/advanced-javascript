<?php

$people = [];

$people[] = array("id"=>1, "name"=>"Kendra Kindrai");
$people[] = array("id"=>2, "name"=>"Sita Evans");
$people[] = array("id"=>3, "name"=>"Canek Llera");
$people[] = array("id"=>4, "name"=>"Julia Conner-Dieter");
$people[] = array("id"=>5, "name"=>"Naomi Tanck");

// Export as JSON
echo json_encode($people);
