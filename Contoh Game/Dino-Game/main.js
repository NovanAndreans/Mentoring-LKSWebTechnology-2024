// Let's init & declare some vars

var $left = 0;
var $counter = 0;
var $isAlive = true;
var $characterPositionMin;
var $characterPositionMax;

$(document).keydown(function (e) {
  $characterPositionMin = $("#character").position().left; // our dino left's position value

  if (e.keyCode == 32 && $isAlive) { // is space is pressed then...
    $("#character").addClass("animate");
    setTimeout(function () {
      $("#character").removeClass("animate");
    }, 400);
  } else if (e.keyCode == 39 && $isAlive) { // if right arrow is pressed then...
    $left += 10;
    $("#character").css({
      left: $left + "px",
    });
  } else if (e.keyCode == 37 && $isAlive && $characterPositionMin >= 0) { // don't go outside the game border
    $left -= 10;
    $("#character").css({
      left: $left + "px",
    });
  }
});

function checkDead() { // are we good?
  var $characterBottom = parseInt($("#character").css("bottom")); // did i jump?
  var $blockLeft = parseInt($("#block").css("left"));
  // 2 lines below give us position of our dino 
  $characterPositionMin = $("#character").position().left;
  $characterPositionMax = $("#character").position().left + 50; // why 50? dino's width = 50px

  if ( // what if didn't miss it?
    $blockLeft <= $characterPositionMax &&
    $blockLeft >= $characterPositionMin &&
    $blockLeft >= -40 &&
    $characterBottom <= 20
  ) {
    $("#block").css({
      animation: "none", // stop animation
    });
    $counter = 0; // endgame
    $("#scoreSpan").html($counter);
    $("#character").addClass("rotated"); 
    $isAlive = false; // dino's dead, baby. dino's dead.
    $(document).keydown(function (e) {
      if (e.keyCode == 82) { // press "r" to start again
        location.reload(); 
      }
    });
    return;
  } else if (
    $blockLeft != $characterPositionMax &&
    $blockLeft != $characterPositionMin &&
    $characterBottom >= 20
  ) {
    $counter += 1;
    $("#scoreSpan").html($counter);
  }
}

$(document).ready(function () {
  setInterval(checkDead, 10); // let's run this function every 10ms
});
