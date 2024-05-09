<?php
include_once("includes/database.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    if ($request === null) {
        echo "Invalid JSON format";
        exit();
    }


    $firstname = trim($request->name);
    $lastname = trim($request->prenom);  //check befor  
    $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
    // $repassword = mysqli_real_escape_string($mysqli, trim($request->pwd));  //check
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $adresse = trim($request->adresse);
    $num_tel = trim($request->num_tel);
    $sql = "INSERT INTO users(firstname,lastname,email,password,address,contact_info) VALUES ('$firstname','$lastname','$email','$pwd','$adresse','$num_tel')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'fname' => $firstname,
            'lname' => $lastname,
            'pwd' => '',
            'email' => $email,
            'Id' => mysqli_insert_id($mysqli)
        ];
        echo json_encode($authdata);
    }
    else {
        echo "Error: " . $sql . "<br>" . $mysqli->error; // Output any database errors
    }
}
 //else {
//     echo "No data received"; // Output if no data is received
// }

?>
