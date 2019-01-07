'use strict';

goog.provide('Blockly.Python.pimobile');

goog.require('Blockly.Python');



Blockly.Python['pimobile_line'] = function(block) {
    var chn = block.getFieldValue('line_follower');
    // Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';

    // if (chn = 1) {
    //     chn = "'A0'"
    // }

    var code = '';
    code += chn;
    // code = 'get_line_value(' + chn + ')\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Blockly.Python['pimobile_line_follower'] = function(block) {
//     var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);

//     Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

//     var code = ' ';
//     code = 'get_line_value(' + chn + ')\n';
//     return code;
// };

Blockly.Python['raspberrypi_digital_pin'] = function(block) { //digital pin number
    var pin = block.getFieldValue('pin');

    Blockly.Python.definitions_['import_raspberrypi_pin'] = 'from raspberrypi import Pin';

    var code = '';
    code += pin;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pimobile_line_follower'] = function(block) {
    var chn = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

    var code = ' ';
    code = 'get_line_value(' + chn + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pimobile_ultarsonic_distance'] = function(block) {
    var Triq = Blockly.Python.valueToCode(block, 'Triq', Blockly.Python.ORDER_ATOMIC);
    var Echo = Blockly.Python.valueToCode(block, 'Echo', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_pimobile'] = 'import pimobile';

    var code = ' ';
    code = 'get_distance(' + Triq + ', ' + Echo + ')';
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