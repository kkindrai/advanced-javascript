<?php


    $isValid = 1;
    // Setting User Entered Email
    $userEnteredEmail = $_GET["email"];
    $college = $_GET["college"];

    if($userEnteredEmail == "kkindrai@madisoncollege.edu" || 
        $userEnteredEmail == "default@email.com") {
        // If email is invalid // one of the things in the if
        $isValid = 0;
        
    } 
    // Otherwise is valid, outputs 1

    echo $isValid;