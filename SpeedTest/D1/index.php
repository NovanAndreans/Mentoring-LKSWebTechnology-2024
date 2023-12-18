<?php
// Set default timezone
date_default_timezone_set('UTC');

if (isset($_GET['month'])) {
    $currentMonth = $_GET['month'];
    $currentYear = $_GET['year'];
} else {
    // Get current month and year
    $currentMonth = date('n');
    $currentYear = date('Y');
}

// Get the number of days in the current month
$daysInMonth = cal_days_in_month(CAL_GREGORIAN, $currentMonth, $currentYear);

// Get the first day of the month
$firstDayOfMonth = mktime(0, 0, 0, $currentMonth, 1, $currentYear);

// Get the name of the current month
$monthName = date('F', $firstDayOfMonth);

// Get the day of the week of the first day of the month (0 - Sunday, 1 - Monday, ...)
$dayOfWeek = date('w', $firstDayOfMonth);
?>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="calendar.css">
</head>

<body>


    <div class="custom-calendar-wrap">
        <div class="custom-inner">
            <div class="custom-header clearfix">
                <nav>
                    <a href="?month=<?= date("m", strtotime(date($currentYear . '-' . $currentMonth . '-1') . " -1 month")) ?>&year=<?= date("Y", strtotime(date($currentYear . '-' . $currentMonth . '-1') . " -1 month")) ?>" class="custom-btn custom-prev"></a>
                    <a href="?month=<?= date("m", strtotime(date($currentYear . '-' . $currentMonth . '-1') . " +1 month")) ?>&year=<?= date("Y", strtotime(date($currentYear . '-' . $currentMonth . '-1') . "+1 month")) ?>" class="custom-btn custom-next"></a>
                </nav>
                <h2 id="custom-month" class="custom-month"><?= $monthName ?></h2>
                <h3 id="custom-year" class="custom-year"><?= $currentYear ?></h3>
            </div>
            <div id="calendar" class="fc-calendar-container">
                <div class="fc-calendar fc-five-rows">
                    <div class="fc-head">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div class="fc-body">
                        <?php
                        echo "<div class='fc-row'>";
                        for ($i = 0; $i < $dayOfWeek; $i++) {
                            echo "<div><span class='fc-date'></span></div>";
                        }

                        // Fill in the days of the month
                        for ($day = 1; $day <= $daysInMonth; $day++) {
                            if ($day == date("d") && $monthName == date("F") && $currentYear == date("Y")) {
                                echo "<div class='fc-today'><span class='fc-date'>$day</span></div>";
                            } else {
                                echo "<div><span class='fc-date'>$day</span></div>";
                            }
                            $dayOfWeek++;

                            // Start a new row if it's Saturday (6)
                            if ($dayOfWeek == 7) {
                                echo "</div><div class='fc-row'>";
                                $dayOfWeek = 0;
                            }
                        }

                        // Fill in blank cells at the end of the month
                        while ($dayOfWeek > 0 && $dayOfWeek < 7) {
                            echo "<div><span class='fc-date'></span></div>";
                            $dayOfWeek++;
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>


</body>

</html>