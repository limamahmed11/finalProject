<?php include 'includes/database.php'; ?>
<?php
	// $conn = $pdo->open();

	// try{
		 		
	    // $result = $mysqli->query("SELECT * FROM category");
	    // $category = $stmt->fetch_all();
		// echo json_encode($category);


	if($result = mysqli_query($mysqli,"SELECT * FROM category")){
		$rows = array();
        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        echo json_encode($rows);
    }
    else{
        http_response_code(404);
    }
	
	// }
	// catch(PDOException $e){
	// 	echo "There is some problem in connection: " . $e->getMessage();
	// }

	//  $pdo->close();

	

?>
