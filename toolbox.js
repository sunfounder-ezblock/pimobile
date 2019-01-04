PiMobile.toolboxText =
    '  <category name="%{BKY_CATPIMOBILE}" colour="#CF5889">' +

    '    <block type="raspberrypi_digital_pin"></block>' +
    '    <block type="raspberrypi_analog_pin"></block>' +
    '    <block type="raspberrypi_pwm_pin"></block>' +
    '    <block type="raspberrypi_device_pin"></block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_set_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_pwm_pin">' +
    '        </shadow>' +
    '      </value>' +
    '      <value name="value">' +
    '        <shadow type="math_number">' +
    '          <field name="NUM">0</field>' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_digital_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +
    '    <block type="raspberrypi_pin_get_value">' +
    '      <value name="pin">' +
    '        <shadow type="raspberrypi_analog_pin">' +
    '        </shadow>' +
    '      </value>' +
    '    </block>' +

    '    <block type="pimobile_line_follower"> ' +
    '    <value name="line"> ' +
    '        <shadow type="pimobile_line"> ' +
    '        </shadow> ' +
    '    </value> ' +
    '    </block> ' +
    '    <block type="pimobile_ultarsonic_distance"></block> ' +
    '    <block type="pimobile_motor"> ' +
    '        <value name="value"> ' +
    '            <shadow type="math_number"> ' +
    '                <field name="NUM">0</field> ' +
    '            </shadow> ' +
    '        </value> ' +
    '    </block> ' +
    '  </category>' +
    '  <sep></sep>'