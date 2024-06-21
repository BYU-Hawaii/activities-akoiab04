<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $feedback = $_POST["comments"];
    $rating = $_POST["rating"];

    if (empty($name) || empty($email) || empty($feedback) || empty($rating)) {
        die("Please fill out all fields.");
    }

    $feedbackEntry = "Name: $name\nEmail: $email\nFeedback: $feedback\nRating: $rating\n\n";


    $file = 'process_feedback.txt';
    if (file_put_contents($file, $feedbackEntry, FILE_APPEND | LOCK_EX) === false) {
        die("Error: Unable to save feedback.");
    }

    echo "Thank you for your feedback!";
} else {
    die("Access denied.");
}
?>
