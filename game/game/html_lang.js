for (var index in Blockly.Msg) {
	var msg = Blockly.Msg[index];
	Blockly.Msg[index] = msg
	                     .split("%play%")
						 .join("\u25b6")
						 .split("%stop%")
						 .join("\ud83d\uded1")
						 .split("%code%")
						 .join("<code>&lt;/&gt;</code>");
}
document.getElementById("run").innerHTML = Blockly.Msg["HTML_RUN"];
document.getElementById("stop").innerHTML = Blockly.Msg["HTML_STOP"];
document.getElementById("seecode").innerHTML = Blockly.Msg["HTML_SEECODE"];
document.getElementById("levelselect").innerHTML = Blockly.Msg["HTML_LEVEL_SELECT"];
document.getElementById("help").innerHTML = Blockly.Msg["HTML_HELP"];