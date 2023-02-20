Blockly.Blocks["test"] = {
 init: function() {
	this.appendValueInput("pin")
		.setCheck("Number")
		.appendField("digitalWrite")
		.appendField("pin");
	this.appendValueInput("val")
		.setCheck("Number")
		.appendField("value");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(Blockly.Msg["MYBLOCKS_HUE"]);
   this.setTooltip("Blocks definition");
   this.setHelpUrl("https://developers.google.com/blockly/guides/create-custom-blocks/overview");
  }
};