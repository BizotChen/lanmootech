Blockly.JavaScript['initled'] = function(block) {
  var init_led_pin = block.getFieldValue('init_led_pin');
  Blockly.Arduino.setups_['init_led_setup'] = 'pinMode(%1, OUTPUT);\n'.replace('%1', init_led_pin);
  var code = '';
  return code;
};

Blockly.JavaScript['blinkled'] = function(block) {
  var blink_led_pin = block.getFieldValue('blink_led_pin');
  var code = 'digitalWrite(%1, LOW);\ndelay(1000);\ndigitalWrite(%1, HIGH);\ndelay(1000);\n'.replace('%1',blink_led_pin).replace('%1',blink_led_pin);
  return code;
};
