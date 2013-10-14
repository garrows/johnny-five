/*
 * johnny-five
 * https://github.com/rwldrn/johnny-five
 *
 * Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>
 * Licensed under the MIT license.
 */
var es6 = require("es6-collections");


module.exports.Accelerometer = require("../lib/accelerometer");
module.exports.Board = require("../lib/board");
module.exports.Button = require("../lib/button");
module.exports.Switch = require("../lib/switch");
module.exports.Compass = require("../lib/compass");
module.exports.Fn = require("../lib/fn");
module.exports.Gripper = require("../lib/gripper");
module.exports.Gyroscope = require("../lib/gyroscope");
module.exports.IR = require("../lib/ir");
module.exports.LCD = require("../lib/lcd");
module.exports.Led = require("../lib/led");
module.exports.LedControl = require("../lib/ledcontrol");
module.exports.Joystick = require("../lib/joystick");
module.exports.Motor = require("../lib/motor");
module.exports.Nodebot = require("../lib/nodebot");
module.exports.Ping = require("../lib/ping");
module.exports.Pir = require("../lib/pir");
module.exports.Pin = require("../lib/pin");
  // module.exports.PWMServo = require("../lib/PWMServo");
module.exports.Repl = require("../lib/repl");
module.exports.Sensor = require("../lib/sensor");
module.exports.Servo = require("../lib/servo");
module.exports.Stepper = require("../lib/stepper");
module.exports.ShiftRegister = require("../lib/shiftregister");
module.exports.Sonar = require("../lib/sonar");
module.exports.Wii = require("../lib/wii");
  // TODO:
  // GPS

// Customized constructors
//
module.exports.Magnetometer = function() {
  return new module.exports.Compass({
    device: "HMC5883L",
    freq: 100,
    gauss: 1.3
  });
};

module.exports.IR.Proximity = function( model ) {
  return new module.exports.IR({
    device: model || "GP2Y0D805Z0F",
    freq: 50
  });
};

module.exports.IR.Reflect = function( model ) {
  return new module.exports.IR({
    device: model || "QRE1113GR",
    freq: 50
  });
};

module.exports.IR.Motion = function( opt ) {
  return new module.exports.Pir(
    typeof opt === "number" ? opt : (
      opt.pin === undefined ? 7 : opt.pin
    )
  );
};


// Short-handing, Aliases
module.exports.Boards = module.exports.Board.Array;
module.exports.Servos = module.exports.Servo.Array;
module.exports.Leds = module.exports.Led.Array;


// Back Compat
module.exports.Nunchuk = module.exports.Wii.Nunchuk;
