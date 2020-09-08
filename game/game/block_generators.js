Blockly.JavaScript["move_forward"] = function(block){
    return "move('forward');\n";
}
Blockly.JavaScript["move"] = function(block){
    return "move('" + block.getFieldValue('way') + "');\n";
}
Blockly.JavaScript['run'] = function(block) {
  var code = Blockly.JavaScript.statementToCode(block, 'run');
  // TODO: Assemble JavaScript into code variable.
  return code;
};
Blockly.JavaScript['move_rotate'] = function(block) {
  var a = block.getFieldValue('direction');
  // TODO: Assemble JavaScript into code variable.
  var code = "turn(90,'"+a+"');\n";
  return code;
};
Blockly.JavaScript['controls_repeat_limited'] = function(block){
  var n = block.getFieldValue('count');
  var s = Blockly.JavaScript.statementToCode(block, 'command');
  var va = Blockly.JavaScript.variableDB_.getDistinctName(
    'count', Blockly.Variables.NAME_TYPE);
  return 'for (var '+va+' = 0; '+va+' < '+n+'; '+va+'++) {\n'+s+'}\n';
}
Blockly.JavaScript['controls_repeat_limited2'] = function(block){
  var n = block.getFieldValue('count');
  var s = Blockly.JavaScript.statementToCode(block, 'command');
  var va = Blockly.JavaScript.variableDB_.getDistinctName(
    'count', Blockly.Variables.NAME_TYPE);
  return 'for (var '+va+' = 0; '+va+' < '+n+'; '+va+'++) {\n'+s+'}\n';
} // Clone... but with a limit of 20 instead of 10!
Blockly.JavaScript['logic_has_space'] = function(block) {
  var a = block.getFieldValue('NAME');
  var b = Blockly.JavaScript.statementToCode(block, 'script');
  // TODO: Assemble JavaScript into code variable.
  var code = "if (isThere('"+a+"')) {\n"+b+"}\n";
  return code;
};

Blockly.JavaScript['logic_has_space_with_else'] = function(block) {
  var a = block.getFieldValue('NAME');
  var b = Blockly.JavaScript.statementToCode(block, 'script');
  var c = Blockly.JavaScript.statementToCode(block, 'script2');
  // TODO: Assemble JavaScript into code variable.
  var code = "if (isThere('"+a+"')) {\n"+b+"} else {\n"+c+"}\n";
  return code;
};

Blockly.JavaScript['loops_until_finish'] = function(block){
  var statements_script = Blockly.JavaScript.statementToCode(block, 'script');
  var code = 'while (!touchingFinish()) {\n'+statements_script+'}\n'
  return code;
};

Blockly.JavaScript['loops_while_space'] = function(block) {
  var a = block.getFieldValue('value');
  var b = Blockly.JavaScript.statementToCode(block, 'script');
  // TODO: Assemble JavaScript into code variable.
  var code = "while (isThere('"+a+"')) {\n"+b+"}\n";
  return code;
}

Blockly.JavaScript['loops_until_space'] = function(block) {
  var a = block.getFieldValue('value');
  var b = Blockly.JavaScript.statementToCode(block, 'script');
  // TODO: Assemble JavaScript into code variable.
  var code = "while (!(isThere('"+a+"'))) {\n"+b+"}\n";
  return code;
}