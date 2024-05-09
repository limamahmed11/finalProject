<?php 
    include_once("../includes/database.php");
	if($result = mysqli_query($mysqli,"SELECT * FROM users")){
		$rows = array();
        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        echo json_encode($rows);
    }
    else{
        http_response_code(404);
    }
	
?>
