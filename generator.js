'use strict';

goog.provide('Blockly.Python.pimobile');

goog.require('Blockly.Python');



Blockly.Python['pimobile_line'] = function(block) {
    var chn = block.getFieldValue('line_follower');
    // Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';
    var code = chn;
    // code = 'get_line_value(' + chn + ')\n';
    return code;
};

// Blockly.Python['pimobile_line_follower'] = function(block) {
//     var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);

//     Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

//     var code = ' ';
//     code = 'get_line_value(' + chn + ')\n';
//     return code;
// };


Blockly.Python['pimobile_line_follower'] = function(block) {
    var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

    var code = ' ';
    code = 'get_line_value(' + chn + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pimobile_ultarsonic_distance'] = function(block) {

    Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

    var code = ' ';
    code = 'get_distance()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['pimobile_motor'] = function(block) {
    // var motor = Blockly.Python.valueToCode(block, 'motor', Blockly.Python.ORDER_ATOMIC);

    var motor = block.getFieldValue('motor');
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

    var code = ' ';
    code = 'set_motor_speed(' + motor + ', ' + value + ')\n';
    return code;
};