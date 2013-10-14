var five = require("../"),
    board, led;

board = new five.Board();

board.on("ready", function() {
  console.log("BOARD IS READY!!!!!!!!!!!")

  // Create a standard `led` hardware instance
  led = new five.Led(13);

  // "strobe" the led in 100ms on-off phases
  led.strobe( 100 );
});