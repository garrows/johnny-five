/*
 * johnny-five
 * https://github.com/rwldrn/johnny-five
 *
 * Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>
 * Licensed under the MIT license.
 */
var es6 = require("es6-shim");
var es7 = require("../lib/es7-shim");

module.exports.Accelerometer = require("../lib/accelerometer");
module.exports.Board = require("../lib/board");
module.exports.Button = require("../lib/button");
module.exports.Compass = require("../lib/compass");
module.exports.Distance = require("../lib/distance");
module.exports.ESC = require("../lib/esc");
module.exports.Fn = require("../lib/fn");
module.exports.Gripper = require("../lib/gripper");
module.exports.Gyro = require("../lib/gyro");
module.exports.IR = require("../lib/ir");
module.exports.LCD = require("../lib/lcd");
module.exports.Led = require("../lib/led");
module.exports.LedControl = require("../lib/ledcontrol");
module.exports.Joystick = require("../lib/joystick");
module.exports.Motor = require("../lib/motor");
module.exports.Nodebot = require("../lib/nodebot");
module.exports.Piezo = require("../lib/piezo");
module.exports.Ping = require("../lib/ping");
module.exports.Pir = require("../lib/pir");
module.exports.Pin = require("../lib/pin");
// module.exports.PWMServo = require("../lib/pwmservo");
module.exports.Relay = require("../lib/relay");
module.exports.Repl = require("../lib/repl");
module.exports.Sensor = require("../lib/sensor");
module.exports.Servo = require("../lib/servo");
module.exports.ShiftRegister = require("../lib/shiftregister");
module.exports.Sonar = require("../lib/sonar");
module.exports.Stepper = require("../lib/stepper");
module.exports.Switch = require("../lib/switch");
module.exports.Wii = require("../lib/wii");



// Customized constructors
//
//

module.exports.Analog = function(opts) {
  return new module.exports.Sensor(opts);
};

module.exports.Digital = function(opts) {
  var pin;

  if (typeof opts === "number") {
    pin = opts;
    opts = {
      type: "digital",
      pin: pin
    };
  } else {
    opts.type = opts.type || "digital";
  }

  return new module.exports.Sensor(opts);
};

module.exports.Sensor.Analog = module.exports.Analog;
module.exports.Sensor.Digital = module.exports.Digital;

module.exports.IR.Distance = function(opts) {
  return new module.exports.Distance(opts);
};

module.exports.IR.Motion = function(opt) {
  return new module.exports.Pir(
    typeof opt === "number" ? opt : (
      opt.pin === undefined ? 7 : opt.pin
    )
  );
};

module.exports.IR.Proximity = function(model) {
  return new module.exports.IR({
    device: model || "GP2Y0D805Z0F",
    freq: 50
  });
};

module.exports.IR.Reflect = function(model) {
  return new module.exports.IR({
    device: model || "QRE1113GR",
    freq: 50
  });
};

module.exports.Magnetometer = function() {
  return new module.exports.Compass({
    device: "HMC5883L",
    freq: 100,
    gauss: 1.3
  });
};

// Short-handing, Aliases
module.exports.Boards = module.exports.Board.Array;
module.exports.ESCs = module.exports.ESC.Array;
module.exports.Leds = module.exports.Led.Array;
module.exports.Servos = module.exports.Servo.Array;


// Back Compat
module.exports.Nunchuk = module.exports.Wii.Nunchuk;
