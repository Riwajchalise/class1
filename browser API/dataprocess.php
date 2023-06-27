<?php
// Assuming you have a MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "clipboard";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the clipboardData parameter exists in the POST request
if(isset($_POST['clipboardData'])){
    // Get the clipboard data from the POST request
    $clipboardData = $_POST['clipboardData'];

    // Prepare the SQL statement to insert the clipboard data into the "clipboard" table
    $sql = "INSERT INTO clipboard (data) VALUES (?)";

    // Prepare the statement
    $stmt = $conn->prepare($sql);
    
    // Bind the clipboard data as a parameter to the statement
    $stmt->bind_param("s", $clipboardData);
    
    // Execute the statement
    $stmt->execute();
    
    // Check if the insertion was successful
    if ($stmt->affected_rows > 0) {
        echo "Clipboard data saved successfully!";
    } else {
        echo "Failed to save clipboard data.";
    }
    
    // Close the statement
    $stmt->close();
} else {
    echo "No clipboard data found.";
}

// Close the database connection
$conn->close();
?>
