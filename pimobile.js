/**
 * create a object of PiMobile and contain it's id and name
 */
var PiMobile = {};
PiMobile.id = 'pimobile';
PiMobile.kits = {}
PiMobile.type = "raspberrypi";
PiMobile.img = CORE_DIR + '/device/' + PiMobile.id + '/img/' + PiMobile.id + '_board' + '.png';
PiMobile.width = 96;
PiMobile.height = 72;
PiMobile.active = 'active';

PiMobile.functions = [
    "iot",
    "remote",
    "routing",
    "bluetooth",
    "play",
]

PiMobile.routingOffset = {
    x: 2.3,
    y: 2.2,
}

PiMobile.pins = [{
        'id': 1,
        'name': 'OUT0',
        'x': 53,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 2,
        'name': 'OUT1',
        'x': 47,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 3,
        'name': 'OUT2',
        'x': 40.7,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 4,
        'name': 'OUT3',
        'x': 34.7,
        'y': 20,
        'isSource': false,
        'property': ["pwm"],
        'type': 'pwm',
    },
    {
        'id': 5,
        'name': 'I2C0',
        'x': 34.7,
        'y': 30.8,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 6,
        'name': 'I2C1',
        'x': 34.7,
        'y': 41.2,
        'isSource': false,
        'property': ["i2c"],
        'type': 'com',
    },
    {
        'id': 7,
        'name': 'IN3',
        'x': 34.7,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 8,
        'name': 'IN2',
        'x': 40.7,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 9,
        'name': 'IN1',
        'x': 47,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
    {
        'id': 10,
        'name': 'IN0',
        'x': 53,
        'y': 52.3,
        'isSource': false,
        'property': ["ain"],
        'type': 'analog',
    },
]

PiMobile.init = function() {
    PiMobile.name = MSG.catPiMobile;
    PiMobile.description = MSG.pimobile_description;

    Blockly.Constants.RaspberryPi.DIGITAL_PINS = [
        ["D0", '"D0"'],
        ["D1", '"D1"'],
        ["D2", '"D2"'],
        ["D3", '"D3"'],
    ];

    Blockly.Constants.RaspberryPi.ANALOG_PINS = [
        ["A0", '"A0"'],
        ["A1", '"A1"'],
        ["A2", '"A2"'],
        ["A3", '"A3"'],
    ];

    Blockly.Constants.RaspberryPi.DEVICE_PINS = [
        ["LED", '"LED"'],
        ["switch", '"SW"'],
    ];

    Blockly.Constants.RaspberryPi.PWM_PINS = [
        ["P0", '"P0"'],
        ["P1", '"P1"'],
        ["P2", '"P2"'],
        ["P3", '"P3"'],
    ];

}

// PiMobile.ab2str = function (buf) {
// 	return String.fromCharGUI.apply(null, new Uint8Array(buf));
// }

// PiMobile.str2ab = function (str) {
// 	var buf = new ArrayBuffer(str.length); // 2 bytes for each char
// 	var bufView = new Uint8Array(buf);
// 	for (var i = 0, strLen = str.length; i < strLen; i++) {
// 		bufView[i] = str.charGUIAt(i);
// 	}
// 	return bufView;
// }