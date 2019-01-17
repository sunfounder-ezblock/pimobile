'use strict';
goog.provide('Blockly.Blocks.pimobile'); // Deprecated
goog.provide('Blockly.Constants.PiMobile');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.PiMobile.RGB = '#3F34D1';
Blockly.Blocks.pimobile.RGB = Blockly.Constants.PiMobile.RGB;

Blockly.Constants.PiMobile.DIGITAL_PINS = [
    ["D0", '"D0"'],
    ["D1", '"D1"'],
    ["D2", '"D2"'],
    ["D3", '"D3"'],
];

Blockly.Constants.PiMobile.ANALOG_PINS = [
    ["A0", '"A0"'],
    ["A1", '"A1"'],
    ["A2", '"A2"'],
    ["A3", '"A3"'],
];

Blockly.Constants.PiMobile.DEVICE_PINS = [
    ["LED", '"LED"'],
    ["switch", '"SW"'],
];

Blockly.Constants.PiMobile.PWM_PINS = [
    ["P0", '"P0"'],
    ["P1", '"P1"'],
    ["P2", '"P2"'],
    ["P3", '"P3"'],
];

Blockly.Constants.PiMobile.Line_follower_channel = [
    ["U1", "'A0'"],
    ["U2", "'A1'"],
];

Blockly.Constants.PiMobile.motor_select = [
    ["Motor1", '1'],
    ["Motor2", '2'],
];


// ---- pimobile constants blocks ---- //
Blockly.Blocks['pimobile_digital_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.PIMOBILE_DIGITAL_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.PiMobile.DIGITAL_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_DIGITAL_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_analog_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.PIMOBILE_ANALOG_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(
                    Blockly.Constants.PiMobile.ANALOG_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Analog_Pin');
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_ANALOG_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_device_pin'] = {
    init: function () {
        this.appendDummyInput().appendField(
            new Blockly.FieldDropdown(Blockly.Constants.PiMobile.DEVICE_PINS), 'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'Digital_Pin');
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_DEVICE_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_pwm_pin'] = {
    init: function () {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.PIMOBILE_PWM_PIN_TITLE)
            .appendField(
                new Blockly.FieldDropdown(Blockly.Constants.PiMobile.PWM_PINS),
                'pin');
        this.setInputsInline(true);
        this.setOutput(true, 'PWM_Pin');
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_PWM_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_line'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.PiMobile.Line_follower_channel), "line_follower");
        this.setInputsInline(true);
        this.setOutput(true, "LINE");
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_LINE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_motor_select'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.PiMobile.motor_select), "motor_select");
        this.setInputsInline(true);
        this.setOutput(true, "MOTOR");
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_MOTOR_SELECT_TOOLTIP);
        this.setHelpUrl('');
    }
};
// ---- pimobile constants blocks ---- //
Blockly.Blocks['pimobile_line_follower'] = {
    init: function () {
        this.appendValueInput("line")
            .setCheck("LINE")
            .appendField(Blockly.Msg.PIMOBILE_LINE_FOLLOWER_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PIMOBILE_LINE_FOLLOWER_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_LINE_FOLLOWER_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_ultarsonic_distance'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PIMOBILE_ULTARSONIC_DISTANCE_TITLE1);
        this.appendValueInput("Triq")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(null)
            .appendField(Blockly.Msg.PIMOBILE_ULTARSONIC_DISTANCE_TITLE2);
        this.appendValueInput("Echo")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck(null)
            .appendField(Blockly.Msg.PIMOBILE_ULTARSONIC_DISTANCE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_ULTARSONIC_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['pimobile_motor'] = {
    init: function () {
        // this.appendValueInput("motor")
        // .setCheck("MOTOR")
        // .appendField(Blockly.Msg.PIMOBILE_MOTOR_TITLE1);
        // .appendField(new Blockly.FieldDropdown(Blockly.Constants.PiMobile.motor_select), "motor_select");
        this.appendValueInput("value")
            .setCheck(null)
            .appendField(Blockly.Msg.PIMOBILE_MOTOR_TITLE1)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.PiMobile.motor_select), "motor")
            .appendField(Blockly.Msg.PIMOBILE_MOTOR_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.PiMobile.RGB);
        this.setTooltip(Blockly.Msg.PIMOBILE_MOTOR_TOOLTIP);
        this.setHelpUrl('');

    }
};