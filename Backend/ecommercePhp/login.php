<?php


include_once("includes/database.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(isset($_GET['username']) && isset($_GET['password'])) {
        // Sanitize input
        $username = mysqli_real_escape_string($mysqli, $_GET['username']);
        $password = mysqli_real_escape_string($mysqli, $_GET['password']);

        // Use prepared statement to prevent SQL injection
        $stmt = $mysqli->prepare("SELECT * FROM users WHERE email=? AND password=?");
        $stmt->bind_param('ss', $username, $password);

        if ($stmt->execute()) {
            $result = $stmt->get_result();
            $rows = $result->fetch_all(MYSQLI_ASSOC);
            echo json_encode($rows);
        } else {
            http_response_code(500); // Internal Server Error
            echo json_encode(array('error' => 'Database query failed.'));
        }
        $stmt->close();
    } else {
        http_response_code(400); // Bad Request
        echo json_encode(array('error' => 'Invalid input parameters.'));
    }
}







// include_once("includes/database.php");
// // $postdata = file_get_contents("php://input");
// // if (isset($postdata) && !empty($postdata)) {
// //     $request = json_decode($postdata);

//     // if ($request === null) {
//     //     echo "Invalid JSON format";
//     //     exit();
//     // }
//     if ($_SERVER['REQUEST_METHOD'] === 'GET') {
//         // Retrieve data from the GET parameters
//         // $username = $_GET['username'];
//         // $password = $_GET['password'];


//     $pwd = mysqli_real_escape_string($mysqli, trim( $_GET['username']));
//     $email = mysqli_real_escape_string($mysqli, trim($_GET['password']));
//     $sql = "SELECT * FROM users where email='$email' and password='$pwd'";
//     if ($result = mysqli_query($mysqli, $sql)) {
//         $rows = array();
//         while($row = mysqli_fetch_assoc($result))
//         {
//             $rows[] = $row;
//         }
//         echo json_encode($rows);
//     }
//     else
//     {
//         http_response_code(404);
//     }
        
// }
// else {
//     echo "No data received"; // Output if no data is received
// }

?>
