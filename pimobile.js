/**
 * create a object of PiMobile and contain it's id and name
 */
var PiMobile = {};
PiMobile.id = 'pimobile';
PiMobile.kits = {}
PiMobile.series = "raspberrypi";
PiMobile.nameEn = "PiMobile";
PiMobile.type = "raspberrypi";
PiMobile.img = CORE_DIR + '/product/' + PiMobile.id + '/img/' + PiMobile.id + '_board' + '.png';
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