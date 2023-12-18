<?php
// Read the JSON file
$jsonData = file_get_contents('result.json');

// Decode JSON data
$data = json_decode($jsonData, true);

// Initialize variables
$totalSent = 0;
$totalReceived = 0;
$sentWords = [];
$receivedWords = [];
$totalSentChars = 0;
$totalReceivedChars = 0;

// Analyze messages
foreach ($data['messages'] as $message) {
    if ($message['type'] === 'message') {
        $totalSent++;
        $totalSentChars += strlen($message['text']);

        // Split words in sent messages
        $words = str_word_count(strtolower($message['text']), 1);
        foreach ($words as $word) {
            $sentWords[$word] = isset($sentWords[$word]) ? $sentWords[$word] + 1 : 1;
        }
    } elseif ($message['type'] === 'received') {
        $totalReceived++;
        $totalReceivedChars += strlen($message['text']);

        // Split words in received messages
        $words = str_word_count(strtolower($message['text']), 1);
        foreach ($words as $word) {
            $receivedWords[$word] = isset($receivedWords[$word]) ? $receivedWords[$word] + 1 : 1;
        }
    }
}

// Sort the words by occurrence
arsort($sentWords);
arsort($receivedWords);

// Get top 5 sent words
$top5SentWords = array_slice($sentWords, 0, 5);

// Calculate averages
$averageSentChars = ($totalSent > 0) ? $totalSentChars / $totalSent : 0;
$averageReceivedChars = ($totalReceived > 0) ? $totalReceivedChars / $totalReceived : 0;

// Display results
echo "<ul><li>Top 5 sent words: <ul>";

foreach ($top5SentWords as $Word => $val) {
    echo "<li>" . $Word . "</li>";
}

echo "</ul></li><br>";

echo "<li>Total messages sent: $totalSent</li><br>";
echo "<li>Total messages received: $totalReceived</li><br>";
echo "<li>Average character length sent: $averageSentChars</li><br>";
echo "<li>Average character length received: $averageReceivedChars</li><br></ul>";
