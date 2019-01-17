/**
 * create a object of PiMobile and contain it's id and name
 */
var PiMobile = {};
PiMobile.id = 'pimobile';
PiMobile.kits = {}
PiMobile.series = "raspberrypi";
PiMobile.nameEn = "PiMobile";
PiMobile.type = "raspberrypi";

PiMobile.functions = [
    "iot",
    "remote",
    "routing",
    "bluetooth",
    "play",
]

PiMobile.libs = [
	// 'pimobile.py',
];

PiMobile.init = function() {
    PiMobile.name = MSG.catPiMobile;
    PiMobile.description = MSG.pimobile_description;
}