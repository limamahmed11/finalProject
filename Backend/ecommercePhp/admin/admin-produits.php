<?php 



include_once("../includes/database.php");

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    if ($request === null) {
        echo "Invalid JSON format";
        exit();
    }

    $nomProduit = trim($request->name);
    $photoProduit = trim($request->photo);
    $descriptionProduit = trim($request->description);
    $priceProduit = trim($request->price);
    $categorieProduit = trim($request->categorie);

    // Prepare the statement to get the category id
    $sql = "SELECT id FROM category WHERE name = ?";
    $stmt = $mysqli->prepare($sql);

    if ($stmt === false) {
        die("Error in preparing statement: " . $mysqli->error);
    }

    // Bind the parameter
    $stmt->bind_param('s', $categorieProduit);

    // Execute the query
    $result = $stmt->execute();

    if ($result === false) {
        die("Error in executing statement: " . $stmt->error);
    }

    // Bind the result variable
    $stmt->bind_result($idCategorie);

    // Fetch the result
    $stmt->fetch();

    // Close the statement
    $stmt->close();

    // Now $idCategorie contains the id from the category table where name matches $categorieProduit

    // Prepare the statement to insert the product
    $sqlInsert = "INSERT INTO products(name, photo, description, price, category_id) VALUES (?, ?, ?, ?, ?)";
    $stmtInsert = $mysqli->prepare($sqlInsert);

    if ($stmtInsert === false) {
        die("Error in preparing insert statement: " . $mysqli->error);
    }

    // Bind parameters for the insert statement
    $stmtInsert->bind_param('ssssi', $nomProduit, $photoProduit, $descriptionProduit, $priceProduit, $idCategorie);

    // Execute the insert query
    $resultInsert = $stmtInsert->execute();

    if ($resultInsert === true) {
        $authdata = [
            'name' => $nomProduit,
            'photo' => $photoProduit,
            'description' => $descriptionProduit,
            'price' => $priceProduit,
            'category_id' => $idCategorie,
            'id' => mysqli_insert_id($mysqli)
        ];
        echo json_encode($authdata);
    } else {
        echo "Error: " . $sqlInsert . "<br>" . $stmtInsert->error;
    }

    // Close the insert statement
    $stmtInsert->close();
}

// Close the database connection
$mysqli->close();


// include_once("../includes/database.php");

// $postdata = file_get_contents("php://input");

// if (isset($postdata) && !empty($postdata)) {
//     $request = json_decode($postdata);

//     if ($request === null) {
//         echo "Invalid JSON format";
//         exit();
//     }

//     $categorieProduit = trim($request->categorie);

//     // Prepare the statement to get the category id
//     $sql = "SELECT id FROM category WHERE name = ?";
//     $stmt = $mysqli->prepare($sql);

//     if ($stmt === false) {
//         die("Error in preparing statement: " . $mysqli->error);
//     }

//     // Bind the parameter
//     $stmt->bind_param('s', $categorieProduit);

//     // Execute the query
//     $result = $stmt->execute();

//     if ($result === false) {
//         die("Error in executing statement: " . $stmt->error);
//     }

//     // Bind the result variable
//     $stmt->bind_result($idCategorie);

//     // Fetch the result
//     $stmt->fetch();

//     // Close the statement
//     $stmt->close();

//     if ($idCategorie !== null) {
//         $authdata = [
//             'categorie_Produit' => $categorieProduit,
//             'idCategorie' => $idCategorie,
//         ];
//         echo json_encode($authdata);
//     } else {
//         echo "Category not found.";
//     }
// }

// // Close the database connection
// $mysqli->close();
///////////////////////
////
////////////////




?>