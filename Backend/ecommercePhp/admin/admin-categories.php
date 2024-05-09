<?php 

include_once("../includes/database.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    if ($request === null) {
        echo "Invalid JSON format";
        exit();
    }

    $nomCategorie = trim($request->name);
    $sql = "INSERT INTO category(name) VALUES ('$nomCategorie')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'nomCategorie' => $nomCategorie,
            'Id' => mysqli_insert_id($mysqli)
        ];
        echo json_encode($authdata);
    }
    else {
        echo "Error: " . $sql . "<br>" . $mysqli->error; // Output any database errors
    }

}


?>