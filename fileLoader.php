<?php
    $fileContents = file_get_contents('/home/kali/GithubProjects/Portfolio/aboutContents.txt');
    $response = array('contents' => $fileContents);
    echo json_encode($response);
?>
