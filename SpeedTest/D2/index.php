<?php
// Load the main image and the logo
$mainImage = imagecreatefromjpeg('image.jpg'); // Replace 'image.jpg' with your image file
$logo = imagecreatefrompng('logo.png'); // Replace 'logo.png' with your logo file

// Get the dimensions of the main image and the logo
$imageWidth = imagesx($mainImage);
$imageHeight = imagesy($mainImage);
$logoWidth = imagesx($logo);
$logoHeight = imagesy($logo);

// Calculate the position to place the logo (top right corner)
$padding = 2; // Set the padding
$positionX = $imageWidth - $logoWidth - $padding;
$positionY = $padding;

// Overlay the logo on the main image
imagecopy($mainImage, $logo, $positionX, $positionY, 0, 0, $logoWidth, $logoHeight);

// Set the content type header to display the image
header('Content-Type: image/jpeg');

// Output the image to the browser or save it to a file
imagejpeg($mainImage);

// Free up memory
imagedestroy($mainImage);
imagedestroy($logo);
