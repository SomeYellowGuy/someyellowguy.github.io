/**
 *   Goal: Load the correct language and then load the other stuff.
 */
var getParameters = function(name, defaultValue) { // Taken from Blockly code.js
  var val = location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
  return val ? decodeURIComponent(val[1].replace(/\+/g, '%20')) : defaultValue;
}, getValue, langs;
// Get the language (Default is English).
var lang = getParameters("lang","en");
// Set the array.
var arrayfiles = [];
var i = -1;

var loadfile1 = function(){
	document.getElementById('workspaceBlocks').getElementsByTagName('block')[0].getElementsByTagName('field')[0].childNodes[0].nodeValue = getParameters('level','1');
	 
	 Blockly.defineBlocksWithJsonArray([{
  "type": "go",
  "message0": "%{BKY_GO}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "l",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
		[
          "5",
          "5"
        ],
		[
          "6",
          "6"
        ],
		[
          "7",
          "7"
        ]
      ]
    }
  ],
  "colour": "#039dfc",
  "tooltip": "",
  "helpUrl": ""
}]);
var fun = function() {
  this._colour = 30*getValue();
}
      /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = { 
	toolbox : toolbox, 
	collapse : false, 
	comments : false, 
	maxBlocks : 1, 
	trashcan : false, 
	horizontalLayout : false, 
	toolboxPosition : 'start', 
	css : true, 
	media : 'https://blockly-demo.appspot.com/static/media/', 
	rtl : false, 
	scrollbars : false, 
	sounds : true, 
	oneBasedIndex : true
};
/* Inject your workspace */ 
var workspace = Blockly.inject("blocklyDiv", options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks"); 

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

getValue = function(){return workspace.getAllBlocks()[0].inputList[0].fieldRow[1].selectedOption_[1];}
langs = ["en","fr"];
document.getElementById('a').innerHTML = Blockly.Msg["LEVEL_SELECT_HEADER"];
setInterval(function(){
  document.getElementById('goto').innerHTML = Blockly.Msg["GO_LEVEL"].split("%1").join(getValue());
  workspace.getAllBlocks()[0].colour_ = getValue()*30;
},30)
}
var langs = ["en","fr"];
if (langs.indexOf(lang) == -1) {
	console.warn("Language '"+lang+"' doesn't exist. Switching to 'en'.")
	lang = 'en';
}
var langload = document.createElement('script');
langload.src = "msg/" + lang + ".js";
langload.onload = loadfile1;
document.head.appendChild(langload);