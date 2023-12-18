<?php
// Read the XML file
$xmlString = file_get_contents('example.xml');

// Convert XML string to SimpleXMLElement object
$xml = simplexml_load_string($xmlString);

// Convert SimpleXMLElement object to JSON
$json = json_encode($xml);

// Output JSON data
header('Content-Type: application/json');
echo $json;
