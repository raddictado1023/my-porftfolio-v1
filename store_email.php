<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["email"])) {
    $email = $_POST["email"];
    $file = fopen("emails.txt", "a");
    if ($file) {
        if (fwrite($file, $email . PHP_EOL)) {
            fclose($file);
            echo "Email successfully stored!";
        } else {
            echo "Error writing email to file.";
        }
    } else {
        echo "Error opening file.";
    }
} else {
    echo "Error: Email not provided.";
}
?>