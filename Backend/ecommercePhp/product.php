<?php include 'includes/database.php'; ?>
<?php
	// $conn = $pdo->open();

	// $slug = $_GET['product'];

	// try{
		 		
	    // $stmt = $mysqli->query("SELECT * FROM products");
	    // $product = $stmt->fetch_all();
		// echo json_encode($product);


		if($result = mysqli_query($mysqli,"SELECT * FROM products"))
		{
		$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}




		
	// }
	// catch(PDOException $e){
	// 	echo "There is some problem in connection: " . $e->getMessage();
	// }

	//  $pdo->close();

	

?>
